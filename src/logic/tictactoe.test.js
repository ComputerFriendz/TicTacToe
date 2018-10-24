const myFunctions = require('./tictactoe');
myFunctions.tictactoe
myFunctions.checkWinner

test("returns O its your turn", () => {
    expect(myFunctions.tictactoe('x')).toBe('o');
});

test("checks if there is a winner", () => {
    expect(myFunctions.checkWinner(false)).toBe(false)
})



