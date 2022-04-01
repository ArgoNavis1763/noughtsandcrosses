import Board from './methods/board.js';

test('new instance of board state returns 9 empty strings', () => {
  const board = new Board();
  expect(board.state).toEqual(['', '', '', '', '', '', '', '', '']);
});

// test("test if printboard prints formattedstring to console", () => {
//     const board = new Board();
//     expect(board.printBoard()).toEqual("");
// })

test('test if board current player default is X', () => {
  const board = new Board();
  expect(board.currentPlayer).toEqual('X');
});

test('if filled box is clicked, then error should be shown', () => {
  const board = new Board(['', '', '', '', '', 'O', '', '', '']);
  expect(() => {
    board.addNewState('X', 5);
  }).toThrowError('This space is full');
});

test('if empty box is clicked, new state should return with new filled string', () => {
  const board = new Board();
  expect(board.addNewState('X', 0)).toEqual(['X', '', '', '', '', '', '', '', '']);
});

test('test if winning result returns winner', () => {
  const board = new Board(['X', 'X', 'X', '', '', '', '', '', '']);
  expect(board.gameWon()).toEqual({ winner: 'X', direction: 'horizontal' });
});

test('test if result returns draw', () => {
  const board = new Board(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X']);
  expect(board.gameWon()).toEqual({ winner: 'draw', direction: null });
});

test('test if game has no result yet', () => {
  const board = new Board(['', '', '', '', '', '', '', '', '']);
  expect(board.gameWon()).toBeNull();
});

test('test if board is empty', () => {
  const board = new Board();
  expect(board.isEmpty()).toBeTruthy();
});

test("test if board isn't empty", () => {
  const board = new Board(['X', 'X', 'X', '', '', '', '', '', '']);
  expect(board.isEmpty()).toBeFalsy();
});

test('test if board is full', () => {
  const board = new Board(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X']);
  expect(board.isFull()).toBeTruthy();
});

test('test if board isnt full', () => {
  const board = new Board(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', '']);
  expect(board.isFull()).toBeFalsy();
});

test('test which index is available', () => {
  const board = new Board(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', '']);
  expect(board.availableIndex()).toEqual([8]);
});
