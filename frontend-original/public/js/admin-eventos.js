async function cargarEventosAdmin() {
    try {
        const respuesta = await fetch('/eventos.json');
        const eventos = await respuesta.json();
        renderizarListaAdmin(eventos);
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderizarListaAdmin(eventos) {
    const contenedor = document.getElementById('admin-lista-eventos');
    contenedor.innerHTML = '';

    if (eventos.length === 0) {
        contenedor.innerHTML = '<p class="sin-productos">No hay eventos activos.</p>';
        return;
    }

    eventos.forEach(evento => {
        const item = document.createElement('div');
        item.classList.add('admin-evento-item');

        item.innerHTML = `
            <div class="admin-evento-info">
                <strong>${evento.titulo}</strong>
                <span>${evento.fecha} · ${evento.lugar}</span>
            </div>
            <button class="btn-eliminar" data-id="${evento.id}">
                <span class="material-symbols-outlined">delete</span>
                Eliminar
            </button>
        `;

        item.querySelector('.btn-eliminar')
            .addEventListener('click', () => eliminarEvento(evento.id));

        contenedor.appendChild(item);
    });
}

async function eliminarEvento(id) {
    if (!confirm('¿Seguro que quieres eliminar este evento?')) return;

    try {
        const respuesta = await fetch(`/api/eventos/${id}`, { method: 'DELETE' });
        if (respuesta.ok) {
            mostrarMensaje('Evento eliminado correctamente.', 'exito');
            cargarEventosAdmin();
        }
    } catch (error) {
        mostrarMensaje('Error al eliminar el evento.', 'error');
    }
}

document.getElementById('btn-agregar').addEventListener('click', async () => {
    const titulo      = document.getElementById('titulo').value.trim();
    const fecha       = document.getElementById('fecha').value;
    const lugar       = document.getElementById('lugar').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const imagen      = document.getElementById('imagen').value.trim();

    if (!titulo || !fecha || !lugar || !descripcion) {
        mostrarMensaje('Por favor completa todos los campos obligatorios.', 'error');
        return;
    }

    const nuevoEvento = { titulo, fecha, lugar, descripcion, imagen };

    try {
        const respuesta = await fetch('/api/eventos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoEvento)
        });

        if (respuesta.ok) {
            mostrarMensaje('Evento agregado correctamente.', 'exito');
            limpiarFormulario();
            cargarEventosAdmin();
        }
    } catch (error) {
        mostrarMensaje('Error al agregar el evento.', 'error');
    }
});

function limpiarFormulario() {
    ['titulo', 'fecha', 'lugar', 'descripcion', 'imagen'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

function mostrarMensaje(texto, tipo) {
    const msg = document.getElementById('form-mensaje');
    msg.textContent = texto;
    msg.className = `form-mensaje ${tipo}`;
    msg.classList.remove('oculto');
    setTimeout(() => msg.classList.add('oculto'), 3000);
}

cargarEventosAdmin();