const imagen = obtenerImagen(producto.nombre);

card.innerHTML = `
    <img src="${imagen}" alt="${producto.nombre}" onerror="this.src='/imagenes/default.jpg'">
`;