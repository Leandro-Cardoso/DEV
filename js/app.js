// Load components:
async function loadComponent(elementId, componentUrl, callback = () => {}) {
    try {
        const response = await fetch(componentUrl);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        callback(); 
    } catch (error) {
        console.error('Erro ao carregar', elementId, error);
    }
}

// Menu:
function toggleMenu(id) {

    const menu = document.getElementById(id);
    
    menu.classList.toggle('hide');

}

function initializeMenuLogic() {
    const menuImg = document.getElementById('menu-img');
    const menu = document.getElementById('menu');
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const classHide = 'hide';
    const classMobileMenu = 'mobile-menu';

    function handleScreenResize(e) {
        if (e.matches) {
            // Mobile mode:
            menu.classList.add(classHide);
            menu.classList.add(classMobileMenu);
            menuImg.classList.remove(classHide);
        } else {
            // PC mode:
            menu.classList.remove(classHide);
            menu.classList.remove(classMobileMenu);
            menuImg.classList.add(classHide);
        }
    }

    handleScreenResize(mediaQuery);
    mediaQuery.addListener(handleScreenResize);
}

// Events:
document.addEventListener('DOMContentLoaded', () => {

    // Load components:
    loadComponent('header', './components/header.html', initializeMenuLogic);
    loadComponent('div-about', './components/div-about.html');
    loadComponent('div-techs', './components/div-techs.html');
    loadComponent('div-academic-qualifications', './components/div-academic-qualifications.html');
    loadComponent('div-languages', './components/div-languages.html');
    loadComponent('div-certifications', './components/div-certifications.html');
    loadComponent('div-work-experience', './components/div-work-experience.html');
    loadComponent('footer', './components/footer.html');
});
