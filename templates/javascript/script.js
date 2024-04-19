document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const menu = document.createElement('div');
    const ul = document.createElement('ul');
    const icono = document.createElement('div');

    // Configurar el icono del menú hamburguesa
    icono.textContent = '☰';
    icono.style.cursor = 'pointer';
    icono.style.fontSize = '24px';
    icono.style.userSelect = 'none';
    
    // Aplicar estilos básicos a ul
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.backgroundColor = '#f4f4f4'; // Color de fondo para móviles

    // Añadir los items del menú
    const items = ['Inicio', 'Explorar', 'Autores', 'Contacto'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '8px';
        li.style.borderBottom = '1px solid #ccc';
        ul.appendChild(li);
    });

    // Añadir elementos al menú
    menu.appendChild(icono);
    menu.appendChild(ul);
    nav.appendChild(menu);

    // Manejar la visibilidad del menú según el tamaño de pantalla
    function updateMenuStyle(e) {
        if (e.matches) { // Si el ancho de pantalla es mayor a 600px
            ul.style.backgroundColor = '#fff';
            ul.style.display = 'flex';
            ul.style.justifyContent = 'center';
            icono.style.display = 'none'; // Ocultar ícono en pantallas grandes
            ul.style.width = '100%'; // Asegura que el ul tome todo el ancho disponible
        } else {
            ul.style.backgroundColor = '#f4f4f4';
            ul.style.display = 'none'; // Ocultar ul en móviles por defecto
            icono.style.display = 'block'; // Mostrar ícono en móviles
            icono.onclick = function() {
                ul.style.display = (ul.style.display == 'none') ? 'block' : 'none';
            };
            ul.style.flexDirection = 'column'; // Asegura que los ítems estén en columna en móviles
        }
    }

    // Crear media query para manejar estilos responsivos
    const mediaQuery = window.matchMedia('(min-width: 601px)');
    mediaQuery.addListener(updateMenuStyle);
    updateMenuStyle(mediaQuery); // Llamar la función al cargar y cada vez que cambie el tamaño de la pantalla
});







/*
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const menu = document.createElement('div');
    const ul = document.createElement('ul');
    const icono = document.createElement('div');

    // Configurar el icono del menú hamburguesa
    icono.textContent = '☰';
    icono.classList.add('menu-icon');

    // Agregar los items del menú
    const items = ['Inicio', 'Servicios', 'Contacto', 'Acerca de'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    // Añadir elementos al menú
    menu.appendChild(icono);
    menu.appendChild(ul);
    nav.appendChild(menu);

    // Estilos básicos para visibilidad
    ul.style.display = 'none'; // Ocultar los elementos del menú inicialmente

    // Función para toggle del menú
    icono.addEventListener('click', () => {
        ul.style.display = (ul.style.display == 'none') ? 'block' : 'none';
    });
});
*/
