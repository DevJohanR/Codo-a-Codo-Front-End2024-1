
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
    setupMobileMenu(ul, icono);
    return menu;
}

function createMenuIcon() {
    const icono = document.createElement('div');
    icono.textContent = '☰';
    Object.assign(icono.style, {
        cursor: 'pointer',
        fontSize: '24px',
        userSelect: 'none',
        display: 'none'
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 27%, rgba(58, 9, 121, 1) 73%, rgba(124, 0, 255, 1) 100%)',
        color: 'white'
    });

    const items = [
        { text: 'Inicio', href: '/index.html' },
        { text: 'Explorar', href: '/templates/pages/explorar.html' },
        { text: 'Autores', href: '/templates/pages/autor.html' },
        { text: 'Contacto', href: '/templates/pages/contacto.html' }
    ];
    items.forEach(item => ul.appendChild(createMenuItem(item)));

    return ul;
}

function createMenuItem(item) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    li.style.padding = '28px';
    return li;
}

function setupResponsiveMenu(ul, icono) {
    const mediaQuery = window.matchMedia('(min-width: 601px)');
    mediaQuery.addEventListener('change', () => updateMenuStyle(mediaQuery, ul, icono));
    updateMenuStyle(mediaQuery, ul, icono);
}

function setupMobileMenu(ul, icono) {
    const mediaQueryMobile = window.matchMedia('(max-width: 600px)');
    mediaQueryMobile.addEventListener('change', (e) => updateMobileMenuStyle(e, ul, icono));
    updateMobileMenuStyle(mediaQueryMobile, ul, icono);
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

        Object.assign(ul.style, {
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100vh',
            zIndex: 1000,
        });

        ul.prepend(closeButton);

        icono.onclick = () => {
            ul.style.display = ul.style.display === 'none' ? 'flex' : 'none';
        };

        closeButton.onclick = () => {
            ul.style.display = 'none';
        };
    } else {
        Object.assign(ul.style, {
            position: 'static',
            height: 'auto',
            flexDirection: 'row',
        });

        const existingCloseButton = ul.querySelector('div');
        if (existingCloseButton) {
            ul.removeChild(existingCloseButton);
        }
    }
}
/*
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
        });
}
*/
function preloadAndSetImage() {
    // Determinar la profundidad de la ruta y ajustar la ruta del logo
    const pathDepth = document.location.pathname.split('/').length - 1;
    const imageUrl = `${'../'.repeat(pathDepth - 1)}templates/img/logos/logoNTFS.png`;

    fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
            // const url = URL.createObjectURL(blob); // Esta línea está comentada, parece no utilizarse.
            const logoNTFS = document.createElement('img');
            logoNTFS.src = imageUrl;
            logoNTFS.style.width = '100px';
            const menu = document.querySelector('.menu-list');
            menu.appendChild(logoNTFS);
        });
}