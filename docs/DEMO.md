# Demo de Paisabor (sin backend)

La tienda y el panel de administración funcionan de punta a punta **en el navegador**, sin
servidor ni base de datos. Todo lo que se guarda (cuentas, pedidos, inventario, reservas) vive en el
`localStorage` del navegador, detrás de una capa de servicios que más adelante se sustituye por
Supabase.

## 1. Cómo correr el proyecto

Requisitos: Node.js 20 o superior.

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

Para comprobar que todo compila:

```bash
npx tsc --noEmit
npm run build
```

## 2. Cómo activar el modo demo

El modo demo añade en `/login` los botones **«Entrar como cliente demo»** y **«Entrar como admin
demo»**, y en `/admin/login` el botón **«Entrar como admin demo»**.

1. Copia el ejemplo de variables y reinicia el servidor:

   ```bash
   cd frontend
   cp .env.local.example .env.local
   npm run dev
   ```

2. `.env.local` no se sube a git (está en `.gitignore`). Contiene:

   | Variable | Para qué sirve |
   |---|---|
   | `NEXT_PUBLIC_DEMO_MODE=true` | Activa las cuentas demo. Sin ella no aparecen los botones. |
   | `NEXT_PUBLIC_DEMO_CLIENTE_EMAIL` / `_PASSWORD` | Cuenta de cliente de la demo. |
   | `NEXT_PUBLIC_DEMO_ADMIN_EMAIL` / `_PASSWORD` | Cuenta de administrador de la demo. |

   Son cuentas ficticias (`@example.com`) que solo existen en el navegador. Nunca pongas
   contraseñas reales: todo lo que empieza por `NEXT_PUBLIC_` acaba en el código que descarga el
   navegador.

> **Sin modo demo no hay forma de entrar al panel admin**: el registro solo crea cuentas de
> cliente. Las cuentas de administrador llegarán con Supabase.

**Empezar de cero:** los datos de ejemplo se crean la primera vez que se abre la app. Para
reiniciarlos, borra en el navegador las claves que empiezan por `paisabor:` (DevTools →
Application → Local Storage) y la cookie `paisabor_session`, o abre una ventana de incógnito.

## 3. Flujo para enseñar al asesor

Conviene usar una ventana normal para el cliente y otra de incógnito para el admin, para tener las
dos sesiones a la vez.

### Cliente

1. **Registro**: `/registro` → nombre, correo, contraseña (mínimo 8 caracteres) y aceptar términos.
   Prueba primero a enviarlo vacío para ver los mensajes de error.
2. **Catálogo**: `/catalogo` → añade platos y productos al carrito.
3. **Carrito**: `/carrito` → revisa cantidades, subtotal, base sin IVA e IVA 9 % incluido.
4. **Checkout**: «Continuar» lleva a `/checkout`. **No hace falta cuenta**: sin sesión el cliente
   escribe sus datos; con sesión se rellenan con el perfil. Elige domicilio o recogida en
   Sint Jorisstraat 4, el **día** (desde mañana) y la **franja horaria**. En domicilio pide calle,
   código postal neerlandés (`1234 AB`) y ciudad. Todo queda en el pedido y el admin lo ve en la
   lista y en el detalle.
5. **Pago**: `/checkout/pago` muestra el aviso «Pago simulado: no se cobra nada». iDEAL y tarjeta son
   solo opciones visuales: no hay campos de tarjeta ni de banco. «Confirmar pedido de prueba» lleva a
   `/checkout/exito`, que crea el pedido en estado
   **pendiente** y se muestra su número. Sin sesión, la confirmación ofrece **crear cuenta** (opcional:
   los pedidos hechos con ese correo pasan a «Mis pedidos») y enlaza al seguimiento.
   - **Seguimiento sin cuenta**: `/seguimiento` → número de pedido + correo con el que se compró
     (también enlazado en el pie de página).
6. **Mis pedidos**: `/mis-pedidos` → abre el pedido para ver la línea de estados. Mientras esté
   pendiente se puede **cancelar** (pide confirmación).
7. **Catering**: `/catering/reservar` → elige varios platos con sus porciones (p. ej. 10 bandeja paisa,
   8 bowl montañero y 7 lechona para 25 invitados). El resumen calcula subtotal, base sin IVA, IVA 9 %
   y total estimado. Al enviar se crea la reserva `RES-…` y `/catering/reserva-pendiente` muestra los
   mismos números. La reserva aparece en `/admin/reservas`.

### Admin

1. **Login**: `/admin/login` → «Entrar como admin demo». Si intentas entrar con una cuenta de
   cliente, la rechaza.
2. **Resumen**: `/admin` → pedidos de hoy, pendientes, reservas por confirmar, stock bajo y ventas del
   mes, todo calculado con los datos.
3. **Cambiar el estado de un pedido**: `/admin/pedidos` → abre un pedido pendiente y pulsa «Pasar a
   Confirmado». Los estados avanzan **solo en orden** (pendiente → confirmado → en preparación →
   listo → enviado → entregado; los de recogida no tienen «enviado»). Cada cambio queda en el
   historial con fecha, hora y quién lo hizo.
   - El pedido semilla **PSB-…-1008** pide 8 empanadas de queso y solo hay 6: al confirmarlo sale el
     error de stock y el estado no cambia.
4. **Inventario**: `/admin/inventario` → mira cómo bajó el stock del pedido confirmado; crea un
   producto en «Nuevo producto», edítalo, ajusta su stock y desactívalo (pide confirmación).
5. **Reservas**: `/admin/reservas` → confirma la reserva pendiente o cancélala. En `/admin/menus`
   se edita el nombre, la descripción y el precio por persona de cada menú de catering.
6. **Protección**: con la sesión de cliente, abre `/admin`: vuelve a la tienda con el aviso de acceso
   denegado.

## 4. Qué es MOCK y qué falta del backend

### Es MOCK (funciona solo en el navegador)

| Pieza | Dónde | Cómo se sustituye |
|---|---|---|
| Servicios (auth, pedidos, inventario, reservas, menús) | `frontend/src/services/*.ts` (interfaz + implementación mock) | Crear `src/services/supabase/` con los mismos nombres y cambiar **una línea** en `src/services/index.ts`. |
| Base de datos | `localStorage`, claves `paisabor:db:*` | Tablas de Supabase. |
| Datos semilla | `src/services/mock/semilla.ts` | Datos reales en la base de datos. El catálogo ya es el real (`src/data`). |
| Sesión | `localStorage` + cookie `paisabor_session` (`rol:id`) | Supabase Auth (cookies de `@supabase/ssr`). |
| Contraseñas | Hash SHA-256 en `localStorage` (no es seguridad real) | Supabase Auth. |
| Protección de rutas | `src/proxy.ts` (en Next 16 `middleware.ts` pasó a llamarse `proxy.ts`) + `<RequireRole>` | Comprobar la sesión de Supabase en el proxy y **RLS** en la base de datos. |
| Recuperar contraseña | No envía nada | `supabase.auth.resetPasswordForEmail`. |
| Pago | Botón «Pagar» simulado | Mollie (iDEAL / tarjeta) con webhook que cree el pedido. |

### Falta del backend

- **Supabase Auth**: registro, login, recuperación de contraseña y cuentas de administrador.
- **RLS (Row Level Security)**: el cliente solo lee sus pedidos y reservas; solo el admin escribe en
  inventario, menús y estados. Hoy esa separación solo existe en la interfaz.
- **Pedidos sin cuenta**: la función `obtener_pedido_publico(p_id, p_email)` (security definer)
  para `/seguimiento`, con límite de intentos, y asociar los pedidos de invitado a la cuenta solo
  cuando el correo esté verificado.
- **Transacciones**: confirmar un pedido y descontar el stock debe ser una única función SQL.
- **Mollie**: pagos reales y estados de pago.
- **Correos**: confirmación de pedido, cambios de estado y recuperación de contraseña (los correos de
  contacto también están pendientes en `src/config/contact.ts`).
- **La tienda lee el catálogo de `src/data`**: los productos creados o editados en el admin aparecen
  en el inventario, pero la tienda no los muestra hasta conectar Supabase. Los pedidos sí usan el
  precio y la disponibilidad del inventario.

### TODO de contenido

- Textos legales definitivos de `/terminos` y `/privacidad`. Hoy dicen que la web es un prototipo
  (datos solo en el navegador, pago simulado) y marcan el resto como provisional. El checkout pide
  aceptar un aviso de privacidad breve antes de pasar al pago.
- Composición y precio por persona de los menús de catering (hoy hay un menú por plato típico con
  precio **estimado**).
- Catering: tiempo de respuesta (`CATERING_RESPUESTA_HORAS` = 24) y anticipación mínima (72 h) en
  `src/config/catering.ts`, y qué servicios incluye (vajilla, montaje, personal, transporte).
- Tipo de IVA (9 % o 21 %) de bebidas y platos preparados, a confirmar con el contador.
- Alérgenos y descripciones de cada plato.
- Afirmaciones del negocio retiradas hasta confirmarlas: cifras de invitados atendidos, HACCP,
  ingredientes importados, dossier de menús, opciones vegetarianas/sin gluten, reparto en bicicleta,
  empaque térmico, horarios y cierre de pedidos de `/menus`, política de cancelación y facturación a
  empresas. Si Diana las confirma, se pueden volver a poner.
- Correos de Google Workspace, segunda sede y horarios.
- Costo de envío a domicilio: lo define Diana. Única fuente en `src/config/envio.ts` (recogida =
  gratis; domicilio = «Se confirma por WhatsApp» mientras no haya precio).
- Entrega (`src/config/entrega.ts`): franjas reales de reparto y recogida (hoy son las del diseño),
  anticipación mínima y máxima, y **zona de reparto** por código postal (sin definir: no se filtra).
