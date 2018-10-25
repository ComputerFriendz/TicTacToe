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

$(function () {
    // create a new board
    var board = new XOBoard();

    // grab jQuery collections
    $modalOverlay = $("#overlay");
    $modalPrompt = $("#modal .prompt");
    $modalInput = $("#modal input");
    $modalButton = $("#modal button");

});

module.exports = {
    notify
}
