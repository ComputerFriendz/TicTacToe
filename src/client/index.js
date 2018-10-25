import _ from 'lodash';
//import css from '../styles/app.css';
import $ from 'jquery';
import XOBoard from '../logic/board';
import Player from '../logic/player';

var currentPlayer = 1,
  playername = '',
  players = [],
  $modalButton,
  $modalInput,
  $modalOverlay,
  $modalPrompt,
  $notice;



function notify(msg) {
  $notice.html(msg);
  return msg;
}

$(function () {
  // create a new board
  var board = new XOBoard();

  // grab jQuery collections
  $modalOverlay = $("#overlay");
  $modalPrompt = $("#modal .prompt");
  $modalInput = $("#modal input");
  $modalButton = $("#modal button");
  $notice = $("#instructions span");

});

  module.exports = {
      notify
  }
