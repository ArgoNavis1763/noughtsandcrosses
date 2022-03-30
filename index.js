import  Board  from "./methods/board.js";
 
document.addEventListener("DOMContentLoaded", () => {
const board = new Board()
board.loadBoard()

const container = document.querySelectorAll('.section')
container.forEach((item) => {
    const squareIndex = item.dataset.index;
    const currentValue = board.state[squareIndex];
    item.innerHTML = `<p>${currentValue}</p>`;
    item.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        board.currentPlayerChange(index);
    })
})
});



