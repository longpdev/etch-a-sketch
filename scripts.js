const container = document.querySelector('.container');


function createGrid(n){
    for (i = 0; i < n; i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = '1';
        container.appendChild(cell);
        cell.addEventListener('mouseover', (e) =>{
            e.target.classList.add('my-color-class');
        } );
    }
}

function makeGrid(row, numCol){
    container.style.setProperty('--numCols', numCol); 

    createGrid(2*row);
}