const container = document.querySelector('.container');


function createGrid(n){
    for (i = 0; i < n; i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = '1';
        container.appendChild(cell);
    }
}