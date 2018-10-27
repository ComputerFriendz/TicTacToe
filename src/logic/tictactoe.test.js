const myFunctions = require('./tictactoe');

test("returns O its your turn", () => {
    expect(myFunctions('x')).toBe('o');
});
