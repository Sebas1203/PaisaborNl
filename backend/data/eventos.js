const WHATSAPP_NUMERO = '31612345678'; // Cambia por el número real

function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-NL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function pedirInfoWhatsApp(evento) {
    const mensaje = `Hola! Me gustaría obtener más información sobre el evento:\n\n📅 *${evento.titulo}*\n📍 ${evento.lugar}\n🗓 ${formatearFecha(evento.fecha)}\n\n¿Pueden darme más detalles?`;
    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

async function cargarEventos() {
    try {
        const respuesta = await fetch('/eventos.json');
        const eventos = await respuesta.json();

        const contenedor = document.getElementById('lista-eventos');
        const sinEventos = document.getElementById('sin-eventos');

        contenedor.innerHTML = '';

        if (eventos.length === 0) {
            sinEventos.classList.remove('oculto');
            return;
        }

        sinEventos.classList.add('oculto');

        eventos.forEach(evento => {
            const card = document.createElement('div');
            card.classList.add('evento-card');

            card.innerHTML = `
                <div class="evento-imagen">
                    <img src="${evento.imagen}" alt="${evento.titulo}"
                         onerror="this.src='/imagenes/default.jpg'">
                </div>
                <div class="evento-info">
                    <div class="evento-meta">
                        <span class="evento-fecha">
                            <span class="material-symbols-outlined">calendar_today</span>
                            ${formatearFecha(evento.fecha)}
                        </span>
                        <span class="evento-lugar">
                            <span class="material-symbols-outlined">location_on</span>
                            ${evento.lugar}
                        </span>
                    </div>
                    <h3>${evento.titulo}</h3>
                    <p>${evento.descripcion}</p>
                    <button class="btn-whatsapp btn-evento-wa">
                        <span class="material-symbols-outlined">chat</span>
                        Pedir información
                    </button>
                </div>
            `;

            card.querySelector('.btn-evento-wa')
                .addEventListener('click', () => pedirInfoWhatsApp(evento));

            contenedor.appendChild(card);
        });

    } catch (error) {
        console.error('Error al cargar eventos:', error);
    }
}

cargarEventos();