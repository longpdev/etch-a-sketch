const container = document.querySelector('.container');

function setGridSize(numCols, numRows){
    container.style.setProperty('--numCols', numCols); 
    container.style.setProperty('--numRows', numRows); 
}

function createGrid(userInput){
    for (i = 0; i < userInput; i++){
        cell = document.createElement('div');
        cell.classList.add('cell');

        container.appendChild(cell);
        // cell.addEventListener('mouseover', (e) =>{
        //     e.target.classList.add('my-color-class');
        // } );
    }
}

//change color when mouseover
container.addEventListener('mouseover', (e) =>{
    cells = document.querySelectorAll('.cell');
   
    if (e.target.matches('div.cell') ){
        e.target.classList.add('my-color-class');
    }
});

//reset grid
function reset(){
    cells = document.querySelectorAll('.cell');
    for (i = 0; i < cells.length; i++){
        cells[i].classList.remove('my-color-class');
    }
    console.log(cells);
    console.log(cells[0]);
}

function removeCells(){
    var child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}


//defaultPage
setGridSize(64,64);
createGrid(64*64);


function loadGrid(){
    var stringInput = document.getElementById('user-input').value;
    //position of 'x'
    var xIndex = stringInput.indexOf('x');
    var col = stringInput.slice(0, xIndex);
    var row = stringInput.slice(xIndex+1, stringInput.length);

    col = parseInt(col);
    row = parseInt(row);
    removeCells();
    setGridSize(col,row);
    createGrid(col*row);
    
}