import Board from './methods/board.js';
const board = new Board();

document.addEventListener('DOMContentLoaded', () => {
  loadBoard(board.state);

  const container = document.querySelectorAll('.section');
  container.forEach((item) => {
    const squareIndex = item.dataset.index;
    const currentValue = board.state[squareIndex];

    item.innerHTML = `<p>${currentValue}</p>`;
    item.addEventListener('click', () => {
      const index = item.dataset.index;
      const result = document.getElementById('result');

      try {
        board.currentPlayerChange(index);
        result.innerText = '';
      } catch (error) {
        result.innerText = 'ERROR';
      }

      loadBoard(board.state);
      console.log(board.gameWon());
    });
  });
});

const loadBoard = (boardState) => {
  const container = document.querySelectorAll('.section');
  container.forEach((item) => {
    const squareIndex = item.dataset.index;
    const currentValue = boardState[squareIndex];
    item.innerHTML = `<p>${currentValue}</p>`;
  });
};

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
  board.resetBoard();
  loadBoard(board.state);
});
