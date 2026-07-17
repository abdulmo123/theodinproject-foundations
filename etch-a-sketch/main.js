function createGrid() {
    // todo: add later prompt to read from input
    const gridSize = Number(prompt("Enter a number up to 100 to generate grid"));

    if (gridSize <= 100) {
        const grid = document.querySelector(".container");
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        grid.style.width = '500px';
        grid.style.height = '500px'
        grid.style.margin = '0 auto'
        grid.style.border = '10px solid darkgray';
        grid.style.backgroundColor = 'darkgray';

        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const cell = document.createElement('div');
                cell.classList.add('box');

                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.style.border = '1px solid gray'
                cell.style.background = 'lightgray';
                cell.style.textAlign = 'center';
                cell.style.fontSize = '1.5rem';
                cell.style.boxSizing = 'border-box';

                cell.addEventListener('mouseover', () => {
                    cell.style.background = 'red'
                    console.log('click!')
                });

                grid.appendChild(cell);
            }
        }
    }
}

createGrid()