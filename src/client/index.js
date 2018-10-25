import _ from 'lodash';
import $ from 'jquery';
//import css from '../styles/app.css';

$notice = $("#instructions span");

function notify(msg) {
  $notice.html(msg);
  return msg;
}

var currentPlayer = 1,
  playername = '',
  players = [],
  $modalButton,
  $modalInput,
  $modalOverlay,
  $modalPrompt,
  $notice;

function promptUser(prompt, callback) {

  $modalOverlay = $("#overlay");
  $modalPrompt = $("#modal .prompt");
  $modalInput = $("#modal input");
  $modalButton = $("#modal button");


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


});

module.exports = {
    notify,
    promptUser
}
