// ====== AUTH CHECK ======
async function verificarAuth() {
    const res = await fetch('/api/auth-check');
    if (!res.ok) window.location.href = '/login.html';
}

// ====== LOGOUT ======
document.getElementById('btn-logout').addEventListener('click', async () => {
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/login.html';
});

// ====== CARGAR CATEGORÍAS EN SELECT ======
async function cargarCategorias() {
    const res        = await fetch('/api/categorias');
    const categorias = await res.json();
    const select     = document.getElementById('categoria');

    categorias.forEach(cat => {
        const option   = document.createElement('option');
        option.value   = cat.id_categoria;
        option.textContent = cat.nombre;
        select.appendChild(option);
    });
}

// ====== CARGAR PRODUCTOS ======
async function cargarProductos(filtro = '') {
    const res       = await fetch('/api/productos');
    const productos = await res.json();

    const filtrados = filtro
        ? productos.filter(p => p.nombre.toLowerCase().includes(filtro.toLowerCase()))
        : productos;

    renderizarProductos(filtrados);
}

function renderizarProductos(productos) {
    const contenedor = document.getElementById('admin-lista-productos');
    contenedor.innerHTML = '';

    if (productos.length === 0) {
        contenedor.innerHTML = '<p class="sin-productos">No hay productos registrados.</p>';
        return;
    }

    productos.forEach(p => {
        const item = document.createElement('div');
        item.classList.add('admin-producto-item');
        item.innerHTML = `
            <img src="${p.imagen || '/imagenes/default.jpg'}"
                 alt="${p.nombre}"
                 onerror="this.src='/imagenes/default.jpg'">
            <div class="admin-producto-info">
                <strong>${p.nombre}</strong>
                <span>${p.precio_venta} · Stock: ${p.stock_actual}</span>
            </div>
            <button class="btn-eliminar" data-id="${p.id_producto}">
                <span class="material-symbols-outlined">delete</span>
            </button>
        `;

        item.querySelector('.btn-eliminar')
            .addEventListener('click', () => eliminarProducto(p.id_producto));

        contenedor.appendChild(item);
    });
}

// ====== ELIMINAR PRODUCTO ======
async function eliminarProducto(id) {
    if (!confirm('¿Seguro que quieres eliminar este producto?')) return;

    const res = await fetch(`/api/productos/${id}`, { method: 'DELETE' });
    if (res.ok) {
        mostrarMensaje('Producto eliminado.', 'exito');
        cargarProductos();
    } else {
        mostrarMensaje('Error al eliminar.', 'error');
    }
}

// ====== SUBIDA DE IMAGEN ======
const uploadArea  = document.getElementById('upload-area');
const imagenInput = document.getElementById('imagen-input');
const preview     = document.getElementById('imagen-preview');
const previewImg  = document.getElementById('preview-img');
let   imagenFile  = null;

uploadArea.addEventListener('click', () => imagenInput.click());

uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
});

uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) mostrarPreview(file);
});

imagenInput.addEventListener('change', () => {
    const file = imagenInput.files[0];
    if (file) mostrarPreview(file);
});

function mostrarPreview(file) {
    imagenFile = file;
    const reader = new FileReader();
    reader.onload = e => {
        previewImg.src = e.target.result;
        uploadArea.classList.add('oculto');
        preview.classList.remove('oculto');
    };
    reader.readAsDataURL(file);
}

document.getElementById('btn-quitar-img').addEventListener('click', () => {
    imagenFile = null;
    previewImg.src = '';
    imagenInput.value = '';
    uploadArea.classList.remove('oculto');
    preview.classList.add('oculto');
});

// ====== AGREGAR PRODUCTO ======
document.getElementById('btn-agregar').addEventListener('click', async () => {
    const nombre      = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio      = document.getElementById('precio').value;
    const stock       = document.getElementById('stock').value;
    const categoria   = document.getElementById('categoria').value;

    if (!nombre || !descripcion || !precio || !stock || !categoria) {
        mostrarMensaje('Completa todos los campos obligatorios.', 'error');
        return;
    }

    const formData = new FormData();
    formData.append('nombre',       nombre);
    formData.append('descripcion',  descripcion);
    formData.append('precio_venta', precio);
    formData.append('stock_actual', stock);
    formData.append('id_categoria', categoria);
    if (imagenFile) formData.append('imagen', imagenFile);

    const res = await fetch('/api/productos', {
        method: 'POST',
        body: formData
    });

    if (res.ok) {
        mostrarMensaje('Producto agregado correctamente.', 'exito');
        limpiarFormulario();
        cargarProductos();
    } else {
        mostrarMensaje('Error al agregar el producto.', 'error');
    }
});

// ====== BUSCADOR ======
document.getElementById('buscador').addEventListener('input', e => {
    cargarProductos(e.target.value);
});

// ====== HELPERS ======
function limpiarFormulario() {
    ['nombre', 'descripcion', 'precio', 'stock'].forEach(id => {
        document.getElementById(id).value = '';
    });
    document.getElementById('categoria').selectedIndex = 0;
    document.getElementById('btn-quitar-img').click();
}

function mostrarMensaje(texto, tipo) {
    const msg = document.getElementById('form-mensaje');
    msg.textContent = texto;
    msg.className = `form-mensaje ${tipo}`;
    msg.classList.remove('oculto');
    setTimeout(() => msg.classList.add('oculto'), 3000);
}

// ====== INIT ======
verificarAuth();
cargarCategorias();
cargarProductos();