const tictactoe = require('./tictactoe');
test("returns greeting with custom name", () => {
    expect(tictactoe("Mei")).toBe("Hello, Mei!");
});