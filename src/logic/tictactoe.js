
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

module.exports = tictactoe;
