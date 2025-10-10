document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    const overlay = document.getElementById('overlay');

    function toggleProjectExpansion(project) {
        const isExpanded = project.classList.toggle('expanded');
        
        if (isExpanded) {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    projects.forEach(project => {
        project.style.cursor = 'zoom-in';
        
        project.addEventListener('click', (event) => {
            if (event.target.closest('.btns')) {
                return; 
            }
            
            toggleProjectExpansion(project);
        });
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            const expandedProject = document.querySelector('.project.expanded');
            if (expandedProject) {
                toggleProjectExpansion(expandedProject);
            }
        });
    }
});
