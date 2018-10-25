import _ from 'lodash';
import $ from 'jquery';
import XOBoard from '../logic/board';
//import css from '../styles/app.css';

$notice = $("#instructions span");

function notify(msg) {
    $notice.html(msg);
    return msg;
}
var handler = function () {
    // get the input value and reset
    var value = $modalInput.val();

    $modalInput.val('');

    // remove event handlers and hide everything
    $modalButton.off();
    $modalInput.off();
    $modalOverlay.hide();

    // execute the callback
    callback(value);
};

var currentPlayer = 1,
    playername = '',
    players = [],
    $modalButton,
    $modalInput,
    $modalOverlay,
    $modalPrompt,
    $notice;

function promptUser(prompt, callback) {
    // show the modal, set the prompt and set focus
    $modalOverlay.show();
    $modalPrompt.html(prompt);
    $modalInput.focus();

    // add event listeners
    $modalButton.on('click');
    $modalInput.on('keypress', function (e) {
        if (e.which == 13) {

            handler();
            return false;
        }
    });
}

$(function () {


    // create a new board
    var board = new XOBoard();

    // grab jQuery collections
    $modalOverlay = $("#overlay");
    $modalPrompt = $("#modal .prompt");
    $modalInput = $("#modal input");
    $modalButton = $("#modal button");

    $('#reset').click(function () {
        currentPlayer = 1;
        board.reset();
    });

});

module.exports = {
    notify,
}