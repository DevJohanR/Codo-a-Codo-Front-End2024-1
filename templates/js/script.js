document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navbar');
    const menu = document.createElement('div');
    const ul = document.createElement('ul');
    const icono = document.createElement('div');
    const logoNTFS = document.createElement('img');

    ul.className = 'menu-list';
    



    // Configurar el icono del menú hamburguesa
    icono.textContent = '☰';
    icono.style.cursor = 'pointer';
    icono.style.fontSize = '24px';
    icono.style.userSelect = 'none';
    
    // Aplicar estilos básicos a ul
    ul.style.listStyleType = 'none';
    ul.style.padding = '0';
    ul.style.margin = '0';
    ul.style.display = 'flex';  // Asegura flexibilidad en la disposición de los ítems
    ul.style.alignItems = 'center';  // Alinea los ítems verticalmente al centro
    ul.style.justifyContent = 'center';  // Alinea los ítems horizontalmente al centro
    ul.style.width = '100%';  // Asegura que ul tome todo el ancho disponible
    ul.style.background = 'linear-gradient(360deg, rgba(2, 0, 36, 1) 27%, rgba(58, 9, 121, 1) 73%, rgba(124, 0, 255, 1) 100%)';
ul.style.color = 'white'
    // Añadir los items del menú
    const items = ['Inicio', 'Explorar', 'Autores', 'Contacto'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.padding = '28px';
        li.style.borderBottom = '1px solid #ccc';
        ul.appendChild(li);
    });

    //Configuracion de la imagen
    logoNTFS.src = './templates/img/logos/logoNTFS.webp'
    logoNTFS.style.width = '100px'
    logoNTFS.style.display = 'none'


    // Añadir elementos al menú
    menu.appendChild(icono);
    menu.appendChild(ul);
    ul.appendChild(logoNTFS);
    nav.appendChild(menu);

    // Manejar la visibilidad del menú según el tamaño de pantalla
    function updateMenuStyle(e) {
        if (e.matches) { // Si el ancho de pantalla es mayor a 600px
            
            ul.style.display = 'flex';
            
            ul.style.justifyContent = 'center';
            icono.style.display = 'none'; // Ocultar ícono en pantallas grandes
            ul.style.width = '100%'; // Asegura que el ul tome todo el ancho disponible
            logoNTFS.style.display = "none"
        } else {
            ul.style.backgroundColor = '#0c044c';
            ul.style.display = 'none'; // Ocultar ul en móviles por defecto
            icono.style.display = 'flex'; // Mostrar ícono en móviles
          
            icono.onclick = function() {
                ul.style.display = (ul.style.display == 'none') ? 'flex' : 'none';
                ul.style.height = '100vh';
                logoNTFS.style.display = (ul.style.display === 'flex') ? 'flex' : 'none';
                
            };
            ul.style.flexDirection = 'column'; // Asegura que los ítems estén en columna en móviles
            

        }
    }

    // Crear media query para manejar estilos responsivos
    const mediaQuery = window.matchMedia('(min-width: 601px)');
    mediaQuery.addListener(updateMenuStyle);
    updateMenuStyle(mediaQuery); // Llamar la función al cargar y cada vez que cambie el tamaño de la pantalla
});





