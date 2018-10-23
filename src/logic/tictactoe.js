
var array = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = 'x';
var winner;
var iswinner = true;

function tictactoe(currentPlayer)
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
function checkWinner(iswinner) {
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