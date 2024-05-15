//script.js
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    nav.appendChild(createMenu());
    
    preloadAndSetImage();
});

function createMenu() {
    const menu = document.createElement('div');
    const icono = createMenuIcon();
    const ul = createMenuList();

    menu.append(icono, ul);
    setupResponsiveMenu(ul, icono);
    setupMobileMenu(ul, icono);  // Configura el comportamiento específico para móviles

    return menu;
}

function createMenuIcon() {
    const icono = document.createElement('div');
    icono.textContent = '☰';
    Object.assign(icono.style, {
        cursor: 'pointer',
        fontSize: '24px',
        userSelect: 'none',
        display: 'none'  // Ocultar inicialmente, se muestra según media query
    });
    return icono;
}

function createMenuList() {
    const ul = document.createElement('ul');
    ul.className = 'menu-list';
    Object.assign(ul.style, {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex', // Ajuste inicial, puede cambiar según la pantalla
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 27%, rgba(58, 9, 121, 1) 73%, rgba(124, 0, 255, 1) 100%)',
        color: 'white'
    });

    const items = ['Inicio', 'Explorar', 'Autores', 'Contacto'];
    items.forEach(item => ul.appendChild(createMenuItem(item)));

    return ul;
}

function createMenuItem(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    li.style.padding = '28px';
    return li;
}

function setupResponsiveMenu(ul, icono) {
    const mediaQuery = window.matchMedia('(min-width: 601px)');
    mediaQuery.addEventListener('change', () => updateMenuStyle(mediaQuery, ul, icono));
    updateMenuStyle(mediaQuery, ul, icono);  // Llamar al cargar la página
}

function setupMobileMenu(ul, icono) {
    const mediaQueryMobile = window.matchMedia('(max-width: 600px)');
    mediaQueryMobile.addEventListener('change', (e) => updateMobileMenuStyle(e, ul, icono));
    updateMobileMenuStyle(mediaQueryMobile, ul, icono);  // Aplicar al cargar la página
}

function updateMenuStyle(mediaQuery, ul, icono) {
    if (mediaQuery.matches) {
        ul.style.display = 'flex';
        icono.style.display = 'none';
    } else {
        ul.style.display = 'none';
        icono.style.display = 'flex';
        icono.onclick = () => {
            ul.style.display = ul.style.display === 'none' ? 'flex' : 'none';
        };
    }
}

function updateMobileMenuStyle(e, ul, icono) {
    if (e.matches) {
        // Agregar botón de cierre
        const closeButton = document.createElement('div');
        closeButton.textContent = 'X';
        closeButton.style = {
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '24px',
            cursor: 'pointer',
            color: 'white',
        };

        // Estilos específicos para móviles
        Object.assign(ul.style, {
            display: 'none', // Ocultar inicialmente hasta que el icono sea clicado
            flexDirection: 'column', // Elementos en columna
            justifyContent: 'space-around', // Distribuir elementos uniformemente
            position: 'absolute', // Posición absoluta para cubrir toda la pantalla
            top: 0,
            left: 0,
            height: '100vh', // Altura de toda la pantalla
            zIndex: 1000, // Asegurar que el menú está sobre otros elementos
        });

        ul.prepend(closeButton); // Agregar botón de cierre al principio del menú

        // Funcionalidad para mostrar/ocultar el menú
        icono.onclick = () => {
            ul.style.display = ul.style.display === 'none' ? 'flex' : 'none';
        };

        // Función para cerrar el menú al hacer clic en el botón de cierre
        closeButton.onclick = () => {
            ul.style.display = 'none';
        };
    } else {
        // Restablecer estilos para no móviles
        Object.assign(ul.style, {
            position: 'static', // Deshacer posición absoluta
            height: 'auto', // Altura automática
            flexDirection: 'row', // Elementos en fila
        });

        // Eliminar el botón de cierre si existe
        const existingCloseButton = ul.querySelector('div');
        if (existingCloseButton) {
            ul.removeChild(existingCloseButton);
        }
    }
}


function preloadAndSetImage() {
    const imageUrl = './templates/img/logos/logoNTFS.png';
    
    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            
            // const url = URL.createObjectURL(blob);
            
            const logoNTFS = document.createElement('img');
            logoNTFS.src = imageUrl;
            logoNTFS.style.width = '100px';
            const menu = document.querySelector('.menu-list');
            menu.appendChild(logoNTFS);
        })
        .catch(error => console.error('Error loading the image:', error));
}



