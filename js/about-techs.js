document.addEventListener('DOMContentLoaded', () => {

    const techsContainer = document.querySelector('.techs');
    const techItems = techsContainer.querySelectorAll('li');
    const totalItems = techItems.length;

    if (totalItems === 0) {
        return;
    }

    function adjustGridColumns() {

        const containerWidth = techsContainer.offsetWidth;
        const minItemWidth = 200;
        const gapStyle = getComputedStyle(techsContainer).gap;
        let gap = 0;

        if (gapStyle) {
            const gapParts = gapStyle.split(' ');
            gap = parseFloat(gapParts[0]) || 0;
        }

        let maxPossibleColumns = Math.floor((containerWidth + gap) / (minItemWidth + gap));
        maxPossibleColumns = Math.max(1, maxPossibleColumns);
        let optimalColumns = maxPossibleColumns;

        for (let numCols = maxPossibleColumns; numCols >= 1; numCols--) {

            if (totalItems % numCols > 1) {
                continue;
            }

            optimalColumns = numCols;
            break;

        }

        techsContainer.style.gridTemplateColumns = `repeat(${optimalColumns}, 1fr)`;

    }

    adjustGridColumns();

    let resizeTimeout;

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustGridColumns, 100);
    });

});
