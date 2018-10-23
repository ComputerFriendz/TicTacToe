
var array = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = 'x';
var winner;
bool = true;

function tictactoe()
{
    if (currentPlayer === 'x') {
        currentPlayer = 'o'
        /*document.getElementById('gamer').innerHTML = 'O, its your turn!';*/

    }
    else {
        currentPlayer = 'x'
    }
    return currentPlayer;
}
function checkWinner(bool) {
    if (array[0] == currentPlayer && array[1] == currentPlayer && array[2] == currentPlayer) {
        console.log('WINNER');
        winner = currentPlayer;
    }
    return false;
}

module.exports = {
    tictactoe,
    checkWinner
}