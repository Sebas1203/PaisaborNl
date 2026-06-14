// ====== CONFIGURACIÓN ======
const WHATSAPP_NUMERO = '31642517023'; // numero de whatsapp con código de país, sin espacios ni guiones (ej: 31642517023 para +31 6 42517023)

// ====== CARRITO ======
let carrito = [];

function actualizarContador() {
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.getElementById('carrito-contador').textContent = total;
}

function agregarAlCarrito(producto) {
    const existente = carrito.find(item => item.id === producto.id);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    actualizarContador();
    mostrarToast(`${producto.nombre} añadido al carrito`);
}

function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('toast-visible'), 10);
    setTimeout(() => {
        toast.classList.remove('toast-visible');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ====== WHATSAPP ======
function comprarPorWhatsApp(producto) {
    const mensaje = `Hola! Me interesa pedir:\n\n🛒 *${producto.nombre}*\nPrecio: ${producto.precio_venta}\n\n¿Está disponible?`;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ====== IMAGEN ======
function obtenerImagen(producto) {
    if (producto.imagen) {
        if (producto.imagen.startsWith('/')) {
            return producto.imagen;
        }

        if (producto.imagen.startsWith('imagenes/')) {
            return '/' + producto.imagen;
        }

        return '/imagenes/' + producto.imagen;
    }

    const nombre = producto.nombre.toLowerCase();

    if (nombre.includes('empanada')) return '/imagenes/Empanadas.jpg';
    if (nombre.includes('chorizo'))  return '/imagenes/chorizo.jpg';
    if (nombre.includes('arepa'))    return '/imagenes/arepa-chocolo.jpg';

    return '/imagenes/default.jpg';
}

// ====== RENDERIZAR PRODUCTOS ======
function renderizarProductos(productos) {
    const contenedor = document.getElementById('lista-productos');
    contenedor.innerHTML = '';

    if (productos.length === 0) {
        contenedor.innerHTML = '<p class="sin-productos">No hay productos en esta categoría.</p>';
        return;
    }

    productos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('producto-card');

        const imagen = obtenerImagen(producto);
        console.log('Producto:', producto.nombre, 'Imagen:', imagen);
        

        card.innerHTML = `
            <img src="${imagen}" alt="${producto.nombre}" class="producto-img" onerror="this.src='/imagenes/default.jpg'">
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion || ''}</p>
                <p class="producto-precio">${producto.precio_venta}</p>
                <p class="producto-stock">Stock: ${producto.stock_actual}</p>
            </div>
            <div class="producto-acciones">
                <button class="btn-carrito" onclick="agregarAlCarrito(${JSON.stringify(producto).replace(/"/g, '&quot;')})">
                    <span class="material-symbols-outlined">shopping_basket</span>
                    Añadir
                </button>
                <button class="btn-whatsapp" onclick="comprarPorWhatsApp(${JSON.stringify(producto).replace(/"/g, '&quot;')})">
                    <span class="material-symbols-outlined">chat</span>
                    Pedir
                </button>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

// ====== CARGAR CATEGORÍAS ======
async function cargarCategorias() {
    try {
        const respuesta = await fetch('/api/categorias');
        const categorias = await respuesta.json();

        const lista = document.getElementById('lista-categorias');

        const iconos = {
            'Fritos':          'local_fire_department',
            'Embutidos':       'set_meal',
            'Panaderia':       'bakery_dining',
            'Platos Tipicos':  'restaurant',
            'Bebidas':         'local_cafe',
            'Dulces y Snacks': 'icecream',
            'Lacteos y Frescos': 'egg',
            'Conservas':       'inventory_2',
        };

        categorias.forEach(cat => {
            const li = document.createElement('li');
            const icono = iconos[cat.nombre] || 'label';
            li.innerHTML = `
                <button class="categoria-btn" data-id="${cat.id_categoria}">
                    <span class="material-symbols-outlined">${icono}</span>
                    ${cat.nombre}
                </button>
            `;
            lista.appendChild(li);
        });

        // Eventos de clic en categorías
        document.querySelectorAll('.categoria-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('activo'));
                btn.classList.add('activo');

                const id = btn.dataset.id;
                const nombre = btn.textContent.trim();
                document.getElementById('categoria-titulo').textContent = nombre;

                if (id === 'todas') {
                    cargarProductos();
                } else {
                    cargarProductosPorCategoria(id);
                }
            });
        });

    } catch (error) {
        console.error('Error al cargar categorías:', error);
    }
}

// ====== CARGAR TODOS LOS PRODUCTOS ======
async function cargarProductos() {
    try {
        const respuesta = await fetch('/api/productos');
        const productos = await respuesta.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// ====== CARGAR PRODUCTOS POR CATEGORÍA ======
async function cargarProductosPorCategoria(idCategoria) {
    try {
        const respuesta = await fetch(`/api/productos?categoria=${idCategoria}`);
        const productos = await respuesta.json();
        renderizarProductos(productos);
    } catch (error) {
        console.error('Error al cargar productos por categoría:', error);
    }
}

// ====== INIT ======
cargarCategorias();
cargarProductos();