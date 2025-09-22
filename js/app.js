async function loadComponent(elementId, componentUrl) {

    try {

        const response = await fetch(componentUrl);
        const html = await response.text();

        document.getElementById(elementId).innerHTML = html;

    } catch (error) {

        console.error('Erro ao carregar', elementId, error);

    }
}

// Load components:

document.addEventListener('DOMContentLoaded', () => {

    loadComponent('header-container', './components/header.html');
    loadComponent('div-about', './components/div-about.html');
    loadComponent('footer-container', './components/footer.html');

});
