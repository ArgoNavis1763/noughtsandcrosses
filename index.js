import Board from './classes/board.js';
import Player from './classes/player.js';
const board = new Board();
const playerX = new Player('Carina', 'X', 0, 0, 0);
const playerO = new Player('Charlotte', 'O', 0, 0, 0);

document.addEventListener('DOMContentLoaded', () => {
  loadBoard(board.state);
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    board.resetBoard();
    loadBoard(board.state);
  });

  const container = document.querySelectorAll('.section');
  container.forEach((item) => {
    item.addEventListener('click', () => {
      const index = item.dataset.index;
      const result = document.getElementById('result');

      try {
        board.currentPlayerChange(index);
        result.innerText = '';
      } catch (error) {
        result.innerText = 'This space is already filled';
      }

      loadBoard(board.state);
      resultMessage();
    });
  });
});

const loadBoard = (boardState) => {
  const container = document.querySelectorAll('.section');
  container.forEach((item) => {
    const squareIndex = item.dataset.index;
    const currentValue = boardState[squareIndex];
    item.innerHTML = `<p>${currentValue}</p>`;
    fillName();
  });
};

const resultMessage = () => {
  const result = document.getElementById('result');
  const resultOutcome = board.gameWon();
  if (resultOutcome === null) {
    result.innerText = '';
  } else if (resultOutcome.winner === 'draw') {
    result.innerText = 'This game is a draw';
    playerX.addDraw();
    playerO.addDraw();
  } else {
    result.innerText = `The winner of the game is ${resultOutcome.winner} and the direction is ${resultOutcome.direction}`;
    if (resultOutcome.winner === 'X') {
      playerX.addWin();
      playerO.addLoss();
    } else if (resultOutcome.winner === 'O') {
      playerO.addWin();
      playerX.addLoss();
    }
  }
  createScores();
};

const createScores = () => {
  const playerXWins = document.getElementById('playerXWins');
  playerXWins.innerText = `${playerX.wins}`;
  const playerXLosses = document.getElementById('playerXLosses');
  playerXLosses.innerText = `${playerX.losses}`;
  const playerXDraws = document.getElementById('playerXDraws');
  playerXDraws.innerText = `${playerX.draws}`;
  const playerOWins = document.getElementById('playerOWins');
  playerOWins.innerText = `${playerO.wins}`;
  const playerOLosses = document.getElementById('playerOLosses');
  playerOLosses.innerText = `${playerO.losses}`;
  const playerODraws = document.getElementById('playerODraws');
  playerODraws.innerText = `${playerO.draws}`;
};

const fillName = () => {
  const playerXName = document.getElementById('playerXName');
  playerXName.innerText = `${playerX.name}`;
  const playerOName = document.getElementById('playerOName');
  playerOName.innerText = `${playerO.name}`;
};
