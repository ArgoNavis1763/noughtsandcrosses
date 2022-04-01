import  Board  from "./methods/board.js";
 
document.addEventListener("DOMContentLoaded", () => {
const board = new Board()
board.loadBoard()


const container = document.querySelectorAll('.section')
container.forEach((item) => {
    const squareIndex = item.dataset.index;
    const currentValue = board.state[squareIndex];
    
    item.innerHTML = `<p>${currentValue}</p>`;
    item.addEventListener('click', () => {
        const index = item.dataset.index;
        board.currentPlayerChange(index);
        board.loadBoard()
        console.log(board.gameWon());
        
        
    })
})
});



