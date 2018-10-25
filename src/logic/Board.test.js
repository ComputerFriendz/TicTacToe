import XOBoard from './Board';
import _ from 'lodash';
var board = new XOBoard();


test("confirms that the function loops through the board", () => {
  expect(board.eachCell()).toBe();
});

test("confirms that the function resets the board", () => {
    expect(board.reset()).toBe(true);
});

test("confirms that the function disables the board", () => {
    expect(board.disable()).toBe();
});

test('that the new board is initialized', () => {
  let board2 = new XOBoard();
  expect(board2).toEqual({
      board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  });
});

test("confirms that the function marks the board with the player's number", () => {
    expect(board.set(1, 2, 1)).toBe(1);
});

test("returns false if there is no winner", () => {
    expect(board.findWinner(1, 2, 1)).toBe(false);
});
