import _ from 'lodash';
import $ from 'jquery';
//import css from '../styles/app.css';

$notice = $("#instructions span");

function notify(msg) {
  $notice.html(msg);
  return msg;
}
function nextTurn() {
    playername = players[currentPlayer - 1].name;
    notify(playername + '\'s Turn');
}
var currentPlayer = 1,
  playername = '',
  players = [],
  $modalButton,
  $modalInput,
  $modalOverlay,
  $modalPrompt,
  $notice;

module.exports = {
    notify
}
