const container = document.querySelector('.container');
const styleSheet = document.styleSheets

function createGrid(n){
    for (i = 0; i < n; i++){
        cell = document.createElement('div');
        cell.classList.add('cell');

        container.appendChild(cell);
        cell.addEventListener('mouseover', (e) =>{
            e.target.classList.add('my-color-class');
        } );
    }
}

function makeGrid(numCols, numRows){
    container.style.setProperty('--numCols', numCols); 
    container.style.setProperty('--numRows', numRows); 
    
}