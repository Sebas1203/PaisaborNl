#!/usr/bin/env node
// Convierte las pantallas de Stitch (docs/diseno-stitch/pantallas/*/code.html) en páginas de Next.js.
//
// Uso (desde frontend/):
//   node scripts/stitch-to-next.mjs              convierte las pantallas que aún no existen
//   node scripts/stitch-to-next.mjs --force      sobrescribe también las existentes (pierde retoques manuales)
//   node scripts/stitch-to-next.mjs carrito ...  solo las pantallas cuyo nombre contiene ese texto
//
// Qué hace con cada pantalla:
//   - toma el <body>, quita <script>, comentarios, <link>/<meta> y atributos on*
//   - quita el nav, header, footer o sidebar propios (los dan los layouts compartidos)
//   - pasa las clases del <body> a un div contenedor
//   - HTML -> JSX: className, htmlFor, style como objeto, atributos en camelCase, etiquetas vacías
//     cerradas, { } y > escapados, value/checked/selected -> defaultValue/defaultChecked
//   - Tailwind v3 -> v4 (shadow-sm -> shadow-xs, rounded -> rounded-sm, outline-none -> outline-hidden...)
//   - clases form-* en las pantallas que cargaban el plugin forms
//   - <form> -> <div> (sin backend, un submit recargaría la página y vaciaría el carrito)
//   - enlaces href="#" -> rutas reales según su texto o icono, con <Link> para las internas
//   - botones principales -> <Go href> (siguiente paso del flujo)
//   - el <style> propio queda dentro de la página, sin las reglas globales que chocan

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const FRONTEND = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PANTALLAS = path.resolve(FRONTEND, '../docs/diseno-stitch/pantallas');
const APP = path.join(FRONTEND, 'src/app');

const PEDIDO_DEMO = '/cuenta/pedidos/PSB-2025-4892';

// ---------------------------------------------------------------------------
// Pantallas: carpeta de Stitch -> ruta, tipo de estructura y ajustes propios
// kind: 'tienda' (Navbar/Footer compartidos), 'auth' (sin estructura), 'adminA' (aside + header),
//       'adminB' (nav lateral "Admin Portal")
// ---------------------------------------------------------------------------
const SCREENS = {
  cat_logo_de_productos_tienda_online: { route: '(tienda)/catalogo', kind: 'tienda' },
  men_de_productos_completo: { route: '(tienda)/catalogo/productos', kind: 'tienda' },
  men_de_platos_t_picos: { route: '(tienda)/catalogo/platos-tipicos', kind: 'tienda' },
  men_bajo_reserva_paisabor: { route: '(tienda)/menus', kind: 'tienda' },
  catering_paisabor: { route: '(tienda)/catering', kind: 'tienda' },
  reservar_men_de_catering_paisabor: { route: '(tienda)/catering/reservar', kind: 'tienda' },
  reserva_pendiente_de_confirmaci_n_paisabor: { route: '(tienda)/catering/reserva-pendiente', kind: 'tienda' },
  carrito_con_opci_n_de_domicilio: {
    route: '(tienda)/carrito',
    kind: 'tienda',
    // su header era sticky, no fijo: el contenido necesita bajar bajo el Navbar fijo
    mainClass: { add: ['pt-28', 'md:pt-32'] },
  },
  finalizar_pedido_paisabor: { route: '(tienda)/checkout', kind: 'tienda' },
  pago_seguro_con_mollie_paisabor: { route: '(tienda)/checkout/pago', kind: 'tienda' },
  pago_exitoso_pedido_confirmado_paisabor: { route: '(tienda)/checkout/exito', kind: 'tienda' },
  pago_no_completado_paisabor: { route: '(tienda)/checkout/error', kind: 'tienda' },
  perfil_de_usuario_paisabor: {
    route: '(tienda)/cuenta',
    kind: 'tienda',
    // traía el sidebar "Admin Portal": sin él no hace falta el margen, y el Navbar es fijo
    mainClass: { remove: ['md:ml-64'], add: ['pt-28', 'lg:pt-28'] },
  },
  actualizar_perfil_paisabor: { route: '(tienda)/cuenta/editar', kind: 'tienda' },
  mis_pedidos_y_reservas_paisabor: { route: '(tienda)/cuenta/pedidos', kind: 'tienda' },
  detalle_del_pedido_paisabor: { route: '(tienda)/cuenta/pedidos/[id]', kind: 'tienda' },
  iniciar_sesi_n_paisabor: { route: '(auth)/login', kind: 'auth' },
  crear_cuenta_paisabor: { route: '(auth)/registro', kind: 'auth' },
  recuperar_contrase_a_paisabor: { route: '(auth)/recuperar-contrasena', kind: 'auth' },

  panel_de_administraci_n_inicio: { route: 'admin', kind: 'adminA' },
  panel_de_administraci_n_paisabor: { route: 'admin/productos', kind: 'adminB' },
  formulario_de_nuevo_producto_paisabor: { route: 'admin/productos/nuevo', kind: 'adminB' },
  panel_de_administraci_n_unificado_gesti_n_de_men_s_y_reservas_paisabor: { route: 'admin/menus', kind: 'adminA' },
  administrador_crear_y_editar_men: { route: 'admin/menus/editar', kind: 'adminA' },
  administrador_pedidos: { route: 'admin/pedidos', kind: 'adminA' },
  administrador_reservas: { route: 'admin/reservas', kind: 'adminA' },
  administrador_inventario: { route: 'admin/inventario', kind: 'adminA' },
  // Los dos modales de edición se abren dentro de /admin/inventario: solo se extrae el modal
  modal_de_edici_n_de_producto_paisabor: {
    fragment: 'features/admin/modals/EditarProductoGeneral.tsx',
    component: 'EditarProductoGeneral',
    kind: 'adminB',
  },
  modal_de_edici_n_canales_y_disponibilidad_paisabor: {
    fragment: 'features/admin/modals/EditarProductoCanales.tsx',
    component: 'EditarProductoCanales',
    kind: 'adminB',
  },
};

// ---------------------------------------------------------------------------
// Enlaces: texto o icono del enlace -> ruta. Se compara el texto normalizado
// (minúsculas, sin tildes ni signos). Lo que no encaje se queda en "#" y se informa.
// ---------------------------------------------------------------------------
const LINKS_TIENDA = [
  [/^(productos|tienda|tienda productos|ver productos|ver tienda|explorar catalogo|seguir comprando|volver a la tienda|catalogo|storefront tienda|despensa|tienda online)$/, '/catalogo'],
  [/^(menu|menus|menu bajo reserva|menus bajo reserva|platos tipicos|restaurant menu menu)$/, '/menus'],
  [/^(catering|eventos|calendar today eventos|catering eventos)$/, '/catering'],
  [/^(inicio|home|home inicio|home home)$/, '/'],
  [/(^| )(carrito|canasta|cart|shopping (bag|cart|basket))( |$)|^ver canasta$|^volver a la canasta/, '/carrito'],
  [/^(editar perfil|edit editar perfil|ajustes|editar)$/, '/cuenta/editar'],
  [/^(mi cuenta|mi perfil|perfil|account circle|person|cuenta)$/, '/cuenta'],
  [/^(mis pedidos|mis pedidos y reservas|pedidos|orders|receipt long orders|volver a mis pedidos( y reservas)?|arrow back volver a mis pedidos( y reservas)?)$/, '/cuenta/pedidos'],
  [/^(ver detalle( del pedido)?)( arrow forward)?$/, PEDIDO_DEMO],
  [/^(iniciar sesion|inicia sesion|entrar|volver al inicio de sesion|arrow back volver al inicio de sesion|ingresar|login)$/, '/login'],
  [/^(crear cuenta|registrate|crear una cuenta|registrarse|unete)$/, '/registro'],
  [/olvidaste tu contrasena/, '/recuperar-contrasena'],
  [/^(reservar( menu| ahora| plato)?|solicitar reserva)( arrow forward)?$/, '/catering/reservar'],
  [/^catering completo$/, '/catering'],
  [/ver mis pedidos y reservas|ver estado de mi pedido|^ver todos( arrow forward)?$/, '/cuenta/pedidos'],
  [/volver al inicio$/, '/'],
  [/volver a la tienda$/, '/catalogo'],
  [/entrega en amsterdam$|volver al resumen de compra$|^arrow back$/, '/checkout'],
  [/reintentar pago$|elegir otro metodo$/, '/checkout/pago'],
  [/olvide mi contrasena/, '/recuperar-contrasena'],
  [/volver a iniciar sesion$/, '/login'],
];

const LINKS_ADMIN = [
  [/^(space dashboard panel|panel|dashboard|dashboard dashboard)$/, '/admin'],
  [/^(inventory 2 productos|productos|products|inventory 2 products|storefront productos despensa|volver a productos|arrow back volver a productos)$/, '/admin/productos'],
  [/^(restaurant menu menus|menus|restaurant menu menu|menu|restaurant menu menus bajo reserva)$/, '/admin/menus'],
  [/^(receipt long pedidos|pedidos|local shipping pedidos.*)$/, '/admin/pedidos'],
  [/^(event available reservas|reservas|event available reservas de menus.*|outdoor grill solicitudes catering.*)$/, '/admin/reservas'],
  [/^(shelves inventario|inventario)$/, '/admin/inventario'],
  [/^(add new product|nuevo producto|agregar producto|add nuevo|nuevo)$/, '/admin/productos/nuevo'],
  [/^ver todos \d+ arrow forward$/, '/admin/pedidos'],
  [/volver al catalogo$/, '/admin/menus'],
];

// Botones principales que llevan al siguiente paso del flujo (texto normalizado -> ruta)
const GO_BUTTONS = {
  carrito_con_opci_n_de_domicilio: [[/^pagar ahora/, '/checkout'], [/^explorar catalogo/, '/catalogo']],
  finalizar_pedido_paisabor: [[/^continuar al pago seguro/, '/checkout/pago']],
  pago_seguro_con_mollie_paisabor: [[/^lock pagar/, '/checkout/exito']],
  men_de_productos_completo: [[/anadir al carrito/, '/carrito']],
  men_de_platos_t_picos: [[/anadir al carrito/, '/carrito']],
  catering_paisabor: [[/enviar solicitud de reserva/, '/catering/reservar']],
  reservar_men_de_catering_paisabor: [[/(confirmar|enviar|solicitar).*reserva/, '/catering/reserva-pendiente']],
  men_bajo_reserva_paisabor: [[/^reservar plato/, '/catering/reservar']],
  iniciar_sesi_n_paisabor: [[/^entrar$/, '/catalogo']],
  crear_cuenta_paisabor: [[/^crear cuenta/, '/catalogo']],
  recuperar_contrase_a_paisabor: [[/^enviar enlace de recuperacion/, '/login']],
  actualizar_perfil_paisabor: [[/guardar cambios/, '/cuenta'], [/^cancelar$/, '/cuenta']],
  perfil_de_usuario_paisabor: [[/editar perfil/, '/cuenta/editar']],
  mis_pedidos_y_reservas_paisabor: [[/^ver detalle/, PEDIDO_DEMO], [/repetir pedido/, '/carrito']],
  detalle_del_pedido_paisabor: [[/repetir este pedido/, '/carrito']],
  formulario_de_nuevo_producto_paisabor: [[/publicar producto/, '/admin/productos'], [/guardar borrador/, '/admin/productos']],
  administrador_crear_y_editar_men: [[/guardar y publicar menu/, '/admin/menus'], [/guardar menu/, '/admin/menus'], [/descartar cambios/, '/admin/menus']],
  panel_de_administraci_n_paisabor: [[/^add new product$/, '/admin/productos/nuevo'], [/^nuevo$/, '/admin/productos/nuevo']],
  panel_de_administraci_n_unificado_gesti_n_de_men_s_y_reservas_paisabor: [[/nuevo menu bajo reserva/, '/admin/menus/editar']],
};

// ---------------------------------------------------------------------------
// Tailwind v3 (CDN de Stitch) -> v4
// ---------------------------------------------------------------------------
const V4_RENAMES = {
  'shadow-sm': 'shadow-xs',
  shadow: 'shadow-sm',
  'drop-shadow-sm': 'drop-shadow-xs',
  'drop-shadow': 'drop-shadow-sm',
  'blur-sm': 'blur-xs',
  blur: 'blur-sm',
  'backdrop-blur-sm': 'backdrop-blur-xs',
  'backdrop-blur': 'backdrop-blur-sm',
  'outline-none': 'outline-hidden',
  ring: 'ring-3',
  'overflow-ellipsis': 'text-ellipsis',
  'decoration-slice': 'box-decoration-slice',
  'decoration-clone': 'box-decoration-clone',
  "font-['Epilogue']": 'font-headline',
  "font-['Work_Sans']": 'font-body',
  "font-['Be_Vietnam_Pro']": 'font-body',
};
const RADIUS_SIDES = ['', 't-', 'r-', 'b-', 'l-', 'tl-', 'tr-', 'br-', 'bl-', 's-', 'e-', 'ss-', 'se-', 'es-', 'ee-'];
for (const side of RADIUS_SIDES) {
  V4_RENAMES[`rounded-${side}sm`] = `rounded-${side}xs`;
  if (side) V4_RENAMES[`rounded-${side.slice(0, -1)}`] = `rounded-${side}sm`;
}
V4_RENAMES.rounded = 'rounded-sm';

const stats = { v4: 0, forms: 0, links: 0, linksPending: [], go: 0, unknownOpacity: [] };

function splitVariants(token) {
  // separa "md:hover:shadow-sm" respetando los corchetes de valores arbitrarios
  const parts = [];
  let depth = 0;
  let cur = '';
  for (const ch of token) {
    if (ch === '[') depth++;
    if (ch === ']') depth--;
    if (ch === ':' && depth === 0) {
      parts.push(cur);
      cur = '';
    } else cur += ch;
  }
  parts.push(cur);
  return parts;
}

function convertClassToken(token) {
  const parts = splitVariants(token);
  let utility = parts.pop();
  let important = '';
  if (utility.startsWith('!')) {
    important = '!';
    utility = utility.slice(1);
  }
  let negative = '';
  if (utility.startsWith('-') && !utility.startsWith('--')) {
    negative = '-';
    utility = utility.slice(1);
  }
  if (V4_RENAMES[utility]) {
    stats.v4++;
    utility = V4_RENAMES[utility];
  } else if (/^bg-gradient-to-/.test(utility)) {
    stats.v4++;
    utility = utility.replace('bg-gradient-to-', 'bg-linear-to-');
  } else if (/^placeholder-(?!shown)/.test(utility)) {
    stats.v4++;
    parts.push('placeholder');
    utility = utility.replace(/^placeholder-/, 'text-');
  } else if (/^(bg|text|border|ring|divide|placeholder)-opacity-/.test(utility)) {
    stats.unknownOpacity.push(token);
  }
  return [...parts, `${important}${negative}${utility}`].join(':');
}

function convertClasses(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map(convertClassToken)
    .join(' ');
}

function convertCss(css) {
  return css
    .replace(/theme\(\s*['"]colors\.([\w-]+)['"]\s*\)/g, 'var(--color-$1)')
    .replace(/theme\(\s*['"]fontFamily\.([\w-]+)['"]\s*\)/g, 'var(--font-$1)')
    .replace(/(['"])Epilogue\1/g, "'Epilogue Variable'")
    .replace(/(['"])Work Sans\1/g, "'Work Sans Variable'")
    .replace(/(['"])Be Vietnam Pro\1/g, "'Work Sans Variable'");
}

// ---------------------------------------------------------------------------
// HTML -> árbol
// ---------------------------------------------------------------------------
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const RAW_TEXT = new Set(['script', 'style', 'textarea', 'title']);

function parseAttrs(src) {
  const attrs = [];
  const re = /([^\s"'=<>\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let m;
  while ((m = re.exec(src))) {
    const value = m[2] ?? m[3] ?? m[4];
    attrs.push({ name: m[1], value: value === undefined ? null : value });
  }
  return attrs;
}

function parse(html) {
  const root = { type: 'el', tag: '#root', attrs: [], children: [] };
  const stack = [root];
  const re = /<!--[\s\S]*?-->|<!doctype[^>]*>|<\/([a-zA-Z][\w:-]*)\s*>|<([a-zA-Z][\w:-]*)((?:\s+[^\s"'=<>\/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*(\/?)>/gi;
  let last = 0;
  let m;
  const top = () => stack[stack.length - 1];
  while ((m = re.exec(html))) {
    if (m.index > last) top().children.push({ type: 'text', value: html.slice(last, m.index) });
    last = re.lastIndex;
    if (m[0].startsWith('<!')) continue;
    if (m[1]) {
      const tag = m[1].toLowerCase();
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === tag) {
          stack.length = i;
          break;
        }
      }
      continue;
    }
    const tag = m[2].toLowerCase();
    const el = { type: 'el', tag, attrs: parseAttrs(m[3] || ''), children: [] };
    top().children.push(el);
    if (RAW_TEXT.has(tag)) {
      const end = html.toLowerCase().indexOf(`</${tag}`, re.lastIndex);
      const stop = end === -1 ? html.length : end;
      el.children.push({ type: 'text', value: html.slice(re.lastIndex, stop) });
      const close = html.indexOf('>', stop);
      re.lastIndex = last = close === -1 ? html.length : close + 1;
      continue;
    }
    if (!VOID.has(tag) && !m[4]) stack.push(el);
  }
  if (last < html.length) top().children.push({ type: 'text', value: html.slice(last) });
  return root;
}

const attr = (el, name) => el.attrs.find((a) => a.name.toLowerCase() === name)?.value ?? null;
const hasAttr = (el, name) => el.attrs.some((a) => a.name.toLowerCase() === name);
const setAttr = (el, name, value) => {
  const found = el.attrs.find((a) => a.name.toLowerCase() === name);
  if (found) found.value = value;
  else el.attrs.push({ name, value });
};
const removeAttr = (el, name) => {
  el.attrs = el.attrs.filter((a) => a.name.toLowerCase() !== name);
};
const classes = (el) => (attr(el, 'class') || '').split(/\s+/).filter(Boolean);
const elements = (node) => node.children.filter((c) => c.type === 'el');

function find(node, pred) {
  for (const child of elements(node)) {
    if (pred(child)) return child;
    const deep = find(child, pred);
    if (deep) return deep;
  }
  return null;
}

function walk(node, fn) {
  for (const child of elements(node)) {
    fn(child, node);
    walk(child, fn);
  }
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', copy: '©', middot: '·' };
function decode(text) {
  return text.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (all, code) => {
    if (code[0] === '#') {
      const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return String.fromCodePoint(n);
    }
    return ENTITIES[code.toLowerCase()] ?? all;
  });
}

function textOf(node) {
  if (node.type === 'text') return decode(node.value);
  return node.children.map(textOf).join(' ');
}

function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[_]/g, ' ')
    .replace(/[^a-z0-9€ ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------------------------------------------------------------------------
// Transformaciones sobre el árbol
// ---------------------------------------------------------------------------
const FORM_TEXT_TYPES = new Set([
  null, 'text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date', 'time',
  'datetime-local', 'month', 'week',
]);

function addClass(el, name) {
  const list = classes(el);
  if (!list.includes(name)) setAttr(el, 'class', [name, ...list].join(' '));
}

function applyFormsPlugin(body) {
  walk(body, (el) => {
    const type = el.tag === 'input' ? (attr(el, 'type') || '').toLowerCase() || null : null;
    let cls = null;
    if (el.tag === 'input' && FORM_TEXT_TYPES.has(type)) cls = 'form-input';
    else if (el.tag === 'input' && type === 'checkbox') cls = 'form-checkbox';
    else if (el.tag === 'input' && type === 'radio') cls = 'form-radio';
    else if (el.tag === 'select') cls = hasAttr(el, 'multiple') ? 'form-multiselect' : 'form-select';
    else if (el.tag === 'textarea') cls = 'form-textarea';
    if (cls) {
      addClass(el, cls);
      stats.forms++;
    }
  });
}

function rewriteLinksAndButtons(body, name, isAdmin) {
  const linkRules = isAdmin ? LINKS_ADMIN : LINKS_TIENDA;
  const goRules = GO_BUTTONS[name] || [];
  walk(body, (el) => {
    if (el.tag === 'a') {
      const href = attr(el, 'href');
      if (href !== '#' && href !== '' && href !== null) return;
      const text = normalize(textOf(el));
      const rule = linkRules.find(([re]) => re.test(text));
      if (rule) {
        setAttr(el, 'href', rule[1]);
        stats.links++;
      } else {
        setAttr(el, 'href', '#');
        stats.linksPending.push(`${name}: "${text}"`);
      }
    } else if (el.tag === 'button') {
      const text = normalize(textOf(el));
      const rule = goRules.find(([re]) => re.test(text));
      if (rule) {
        el.go = rule[1];
        stats.go++;
      }
    }
  });
}

function stripChrome(body, kind) {
  const top = elements(body);
  if (kind === 'tienda') {
    body.children = body.children.filter(
      (c) =>
        c.type !== 'el' ||
        !(['header', 'nav', 'footer'].includes(c.tag) || (c.tag === 'div' && classes(c).includes('fixed')))
    );
  } else if (kind === 'adminA') {
    // aside + div.pl-64 > (header + main): queda solo el main
    const wrapper = top.find((c) => c.tag === 'div' && classes(c).some((k) => /^pl-\d+$/.test(k)));
    const main = wrapper && find(wrapper, (c) => c.tag === 'main');
    body.children = main ? [main] : body.children.filter((c) => c.type !== 'el' || c.tag !== 'aside');
  } else if (kind === 'adminB') {
    body.children = body.children.filter((c) => c.type !== 'el' || c.tag !== 'nav');
    const main = elements(body).find((c) => c.tag === 'main');
    if (main) {
      // el layout de admin ya deja el hueco del sidebar y tiene un header fijo de h-16
      setAttr(main, 'class', [...classes(main).filter((k) => k !== 'md:ml-64'), 'pt-16'].join(' '));
    }
  }
}

function patchMain(body, patch) {
  if (!patch) return;
  const main = find(body, (c) => c.tag === 'main');
  if (!main) return;
  const list = classes(main).filter((k) => !(patch.remove || []).includes(k));
  setAttr(main, 'class', [...list, ...(patch.add || [])].join(' '));
}

// ---------------------------------------------------------------------------
// Árbol -> JSX
// ---------------------------------------------------------------------------
const ATTR_RENAMES = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength',
  minlength: 'minLength', colspan: 'colSpan', rowspan: 'rowSpan', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', crossorigin: 'crossOrigin', srcset: 'srcSet', enctype: 'encType',
  novalidate: 'noValidate', contenteditable: 'contentEditable', inputmode: 'inputMode',
  spellcheck: 'spellCheck', datetime: 'dateTime', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', playsinline: 'playsInline', autoplay: 'autoPlay',
  cellpadding: 'cellPadding', cellspacing: 'cellSpacing', usemap: 'useMap', formaction: 'formAction',
  referrerpolicy: 'referrerPolicy', accesskey: 'accessKey', itemprop: 'itemProp', charset: 'charSet',
  viewbox: 'viewBox', enterkeyhint: 'enterKeyHint', fetchpriority: 'fetchPriority',
};
const BOOLEAN_ATTRS = new Set([
  'disabled', 'readonly', 'required', 'multiple', 'hidden', 'autofocus', 'open', 'novalidate',
  'allowfullscreen', 'playsinline', 'autoplay', 'muted', 'loop', 'controls', 'default', 'reversed',
  'itemscope', 'checked', 'selected',
]);
const BLOCK = new Set([
  'div', 'p', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside', 'ul', 'ol', 'li', 'h1',
  'h2', 'h3', 'h4', 'h5', 'h6', 'form', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th',
  'fieldset', 'figure', 'figcaption', 'details', 'summary', 'dl', 'dt', 'dd', 'hr', 'blockquote',
  'select', 'option', 'textarea',
]);
const NUMERIC_ATTRS = new Set(['rows', 'cols', 'maxlength', 'minlength', 'tabindex', 'colspan', 'rowspan', 'size', 'span']);
const DROP_TAGS = new Set(['script', 'link', 'meta', 'title', 'noscript', 'base']);

const jsString = (value) => JSON.stringify(value);

function jsxAttrName(name) {
  const lower = name.toLowerCase();
  if (ATTR_RENAMES[lower]) return ATTR_RENAMES[lower];
  if (lower.startsWith('data-') || lower.startsWith('aria-')) return lower;
  if (name.includes(':')) return name.replace(/:(\w)/g, (_, c) => c.toUpperCase());
  if (name.includes('-')) return name.replace(/-(\w)/g, (_, c) => c.toUpperCase());
  return name;
}

function styleObject(css) {
  const decls = [];
  let depth = 0;
  let quote = null;
  let cur = '';
  for (const ch of decode(css)) {
    if (quote) {
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0 && !quote) {
      decls.push(cur);
      cur = '';
    } else cur += ch;
  }
  decls.push(cur);
  const entries = decls
    .map((d) => d.trim())
    .filter(Boolean)
    .map((d) => {
      const i = d.indexOf(':');
      const prop = d.slice(0, i).trim();
      const value = d.slice(i + 1).trim();
      const key = prop.startsWith('--')
        ? jsString(prop)
        : prop
            .replace(/^-ms-/, 'ms-')
            .replace(/^-(\w)/, (_, c) => c.toUpperCase())
            .replace(/-(\w)/g, (_, c) => c.toUpperCase());
      return `${key}: ${jsString(convertCss(value))}`;
    });
  return `{{ ${entries.join(', ')} }}`;
}

function attrsToJsx(el) {
  const out = [];
  const tag = el.tag;
  const type = (attr(el, 'type') || '').toLowerCase();
  for (const { name, value } of el.attrs) {
    const lower = name.toLowerCase();
    if (/^on/.test(lower)) continue;
    if (lower === 'selected') continue; // se resuelve como defaultValue del <select>
    if (lower === 'style') {
      if (value && value.trim()) out.push(`style=${styleObject(value)}`);
      continue;
    }
    if (lower === 'class') {
      out.push(`className=${jsString(decode(convertClasses(value || '')))}`);
      continue;
    }
    if (lower === 'checked') {
      out.push('defaultChecked');
      continue;
    }
    if (lower === 'value' && tag === 'input' && !['hidden', 'submit', 'button', 'reset', 'checkbox', 'radio', 'image'].includes(type)) {
      out.push(`defaultValue=${jsString(decode(value ?? ''))}`);
      continue;
    }
    if (lower === 'type' && el.go) {
      out.push('type="button"');
      continue;
    }
    const jsxName = jsxAttrName(name);
    if (BOOLEAN_ATTRS.has(lower) && (value === null || value === '' || value.toLowerCase() === lower)) {
      out.push(jsxName);
      continue;
    }
    if (value === null) {
      out.push(`${jsxName}=""`);
      continue;
    }
    if (NUMERIC_ATTRS.has(lower) && /^-?\d+$/.test(value.trim())) {
      out.push(`${jsxName}={${value.trim()}}`);
      continue;
    }
    out.push(`${jsxName}=${jsString(decode(value))}`);
  }
  if (el.go) out.unshift(`href=${jsString(el.go)}`);
  if (el.defaultValue !== undefined) out.push(`defaultValue=${jsString(el.defaultValue)}`);
  return out;
}

function escapeText(text) {
  return text.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;').replace(/>/g, '&gt;');
}

const isInline = (node) => node && (node.type === 'text' || !BLOCK.has(node.tag));

function prepare(el) {
  // <select> con <option selected>  ->  defaultValue en el select
  if (el.tag === 'select') {
    const selected = find(el, (c) => c.tag === 'option' && hasAttr(c, 'selected'));
    if (selected) el.defaultValue = attr(selected, 'value') ?? textOf(selected).replace(/\s+/g, ' ').trim();
  }
  // <textarea>texto</textarea>  ->  defaultValue
  if (el.tag === 'textarea') {
    const text = decode(el.children.map((c) => c.value || '').join(''));
    if (text.trim()) el.defaultValue = text.trim();
    el.children = [];
  }
}

function renderChildren(node, depth, ctx) {
  const kids = node.children.filter((c) => !(c.type === 'el' && DROP_TAGS.has(c.tag)));
  const lines = [];
  const pad = '  '.repeat(depth);
  kids.forEach((child, i) => {
    const prev = kids[i - 1];
    const next = kids[i + 1];
    if (child.type === 'text') {
      const collapsed = child.value.replace(/\s+/g, ' ');
      if (collapsed.trim() === '') {
        if (prev && next && isInline(prev) && isInline(next) && prev.type === 'el' && next.type === 'el') {
          lines.push(`${pad}{' '}`);
        }
        return;
      }
      const lead = /^\s/.test(child.value) && prev ? "{' '}" : '';
      const trail = /\s$/.test(child.value) && next ? "{' '}" : '';
      lines.push(`${pad}${lead}${escapeText(collapsed.trim())}${trail}`);
      return;
    }
    lines.push(render(child, depth, ctx));
  });
  return lines;
}

function render(el, depth, ctx) {
  const pad = '  '.repeat(depth);
  prepare(el);
  let tag = el.tag;
  if (tag === 'form') tag = 'div';
  if (tag === 'a') {
    const href = attr(el, 'href') || '';
    if (href.startsWith('/')) {
      tag = 'Link';
      ctx.imports.add("import Link from 'next/link';");
    }
  }
  if (el.go) {
    tag = 'Go';
    ctx.imports.add("import { Go } from '@/components/ui/Go';");
  }
  if (el.tag === 'form') {
    removeAttr(el, 'action');
    removeAttr(el, 'method');
    removeAttr(el, 'novalidate');
  }
  const attrs = attrsToJsx(el);
  const open = attrs.length ? `<${tag} ${attrs.join(' ')}` : `<${tag}`;
  if (VOID.has(el.tag)) return `${pad}${open} />`;
  const children = renderChildren(el, depth + 1, ctx);
  if (!children.length) return `${pad}${open}></${tag}>`;
  return `${pad}${open}>\n${children.join('\n')}\n${pad}</${tag}>`;
}

// ---------------------------------------------------------------------------
// <style> propio de la pantalla, sin las reglas globales que chocan con la app
// ---------------------------------------------------------------------------
function splitRules(css) {
  // reglas de primer nivel: "selector { ... }" respetando llaves anidadas (@layer, @media)
  const rules = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < css.length; i++) {
    if (css[i] === '{') depth++;
    if (css[i] === '}') {
      depth--;
      if (depth === 0) {
        rules.push(css.slice(start, i + 1).trim());
        start = i + 1;
      }
    }
  }
  return rules.filter(Boolean);
}

function cleanStyle(css) {
  const kept = [];
  for (const rule of splitRules(css.replace(/\/\*[\s\S]*?\*\//g, ''))) {
    const selector = rule.slice(0, rule.indexOf('{')).trim();
    if (/^@layer base/.test(selector)) {
      // del arnés de Stitch solo importa el margen de los extremos del <main> (afecta al diseño)
      const inner = rule.slice(rule.indexOf('{') + 1, -1);
      const mains = splitRules(inner).filter((r) => r.startsWith('main>'));
      if (mains.length) kept.push(`@layer base { ${mains.join(' ')} }`);
      continue;
    }
    if (/^(html|body)\b|::-webkit-scrollbar|^\.material-symbols-outlined/.test(selector)) continue;
    kept.push(rule.replace(/\s+/g, ' '));
  }
  if (!kept.length) return '';
  // En Stitch el CSS de Tailwind (CDN) se inyectaba después del <style> de la pantalla, así que
  // las utilidades y el plugin forms le ganaban; la capa base reproduce ese orden en Tailwind v4.
  return convertCss(`@layer base {\n${kept.join('\n')}\n}`);
}

// ---------------------------------------------------------------------------
// Generación
// ---------------------------------------------------------------------------
function componentName(route) {
  const base = route
    .replace(/\(.*?\)\/?/g, '')
    .replace(/\[(\w+)\]/g, '$1')
    .split(/[\/-]/)
    .filter(Boolean)
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('');
  return `${base || 'Inicio'}Page`;
}

function convertScreen(name, cfg) {
  const html = fs.readFileSync(path.join(PANTALLAS, name, 'code.html'), 'utf8');
  const doc = parse(html);
  const htmlEl = find(doc, (c) => c.tag === 'html') || doc;
  const body = find(htmlEl, (c) => c.tag === 'body');
  if (!body) throw new Error(`${name}: sin <body>`);

  const css = [];
  walk(htmlEl, (el) => {
    if (el.tag === 'style') css.push(el.children.map((c) => c.value).join(''));
  });
  // quitar los <style> del body para no renderizarlos dos veces
  walk(body, (el) => {
    el.children = el.children.filter((c) => !(c.type === 'el' && c.tag === 'style'));
  });
  body.children = body.children.filter((c) => !(c.type === 'el' && c.tag === 'style'));

  const usesForms = /cdn\.tailwindcss\.com\?plugins=[^"]*forms/.test(html);
  const isAdmin = cfg.kind.startsWith('admin');

  stripChrome(body, cfg.kind);
  patchMain(body, cfg.mainClass);
  if (usesForms) applyFormsPlugin(body);
  rewriteLinksAndButtons(body, name, isAdmin);

  const ctx = { imports: new Set() };
  const style = cleanStyle(css.join('\n'));
  let rootEl;
  if (cfg.fragment) {
    // modal: el primer bloque fixed inset-0 dentro del main
    const modal = find(body, (c) => classes(c).includes('fixed') && classes(c).includes('inset-0'));
    if (!modal) throw new Error(`${name}: no se encontró el modal`);
    rootEl = modal;
  } else {
    rootEl = { type: 'el', tag: 'div', attrs: [{ name: 'class', value: attr(body, 'class') || '' }], children: body.children };
  }

  const inner = render(rootEl, 2, ctx);
  const styleJsx = style
    ? `      <style dangerouslySetInnerHTML={{ __html: ${jsString(style)} }} />\n`
    : '';
  const fn = cfg.component || componentName(cfg.route);
  const lines = [
    `// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/${name}`,
    '/* eslint-disable @next/next/no-img-element */',
    ...[...ctx.imports].sort(),
    '',
    cfg.fragment ? `export function ${fn}() {` : `export default function ${fn}() {`,
    '  return (',
    '    <>',
    styleJsx + inner,
    '    </>',
    '  );',
    '}',
    '',
  ];
  return lines.join('\n').replace(/\n{3,}/g, '\n\n');
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const filters = args.filter((a) => !a.startsWith('--'));
  const written = [];
  const skipped = [];
  for (const [name, cfg] of Object.entries(SCREENS)) {
    if (filters.length && !filters.some((f) => name.includes(f) || (cfg.route || '').includes(f))) continue;
    const out = cfg.fragment ? path.join(FRONTEND, 'src', cfg.fragment) : path.join(APP, cfg.route, 'page.tsx');
    if (fs.existsSync(out) && !force) {
      skipped.push(path.relative(FRONTEND, out));
      continue;
    }
    const code = convertScreen(name, cfg);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, code);
    written.push(path.relative(FRONTEND, out));
  }
  console.log(`Escritos (${written.length}):\n  ${written.join('\n  ')}`);
  if (skipped.length) console.log(`Ya existían, sin tocar (usa --force) (${skipped.length}):\n  ${skipped.join('\n  ')}`);
  console.log(`\nClases v3 -> v4: ${stats.v4} · form-*: ${stats.forms} · enlaces resueltos: ${stats.links} · botones <Go>: ${stats.go}`);
  if (stats.unknownOpacity.length) console.log(`Clases *-opacity sin equivalente directo: ${stats.unknownOpacity.join(', ')}`);
  if (stats.linksPending.length) {
    console.log(`\nEnlaces "#" sin ruta (${stats.linksPending.length}):`);
    for (const l of stats.linksPending) console.log(`  ${l}`);
  }
}

main();
