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

test("confirms that the function sets the value of the player to the right spot", () => {
    expect(board.set(1, 2, 1)).toBe(1);
});
