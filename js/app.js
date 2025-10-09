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

    loadComponent('header', './components/header.html');
    loadComponent('div-about', './components/div-about.html');
    loadComponent('div-techs', './components/div-techs.html');
    loadComponent('div-academic-qualifications', './components/div-academic-qualifications.html');
    loadComponent('div-languages', './components/div-languages.html');
    loadComponent('footer', './components/footer.html');

});
