var gridSize = 0;

function startSketch(gridSize) {
    if (gridSize <= 100) {
        const grid = document.querySelector("#grid");
        grid.classList.toggle('hidden');
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
                });

                grid.appendChild(cell);
            }
        }
    }
}

function setGridSize() {
    // hide grid until grid size is set
    const grid = document.querySelector("#grid");
    grid.classList.toggle('hidden');

    const startBtn = document.getElementById("start");
    startBtn.addEventListener('click', (e) => {
        // toggle hidden on modal -- it will display it
        const modal = document.getElementById('grid-size');
        modal.classList.toggle('hidden');

        // event listener for input so we can pass that into closeModal when we enter a number
        const input = document.querySelector('#size');
        input.addEventListener('input', (event) => {
            gridSize = event.target.value;
        });
    });
}

function resetGrid() {
    // reset each cell back to original color
    document.querySelectorAll('.box').forEach(cell => cell.style.background = 'lightgray');
}

function closeModal() {

    // toggle modal to hidden
    const modal = document.getElementById('grid-size');
    modal.classList.toggle('hidden');

    // remove all the dynamically created cells in the grid
    document.querySelectorAll('.box').forEach(cell => cell.remove());

    // call start sketch to begin sketching
    startSketch(gridSize);
}

setGridSize()