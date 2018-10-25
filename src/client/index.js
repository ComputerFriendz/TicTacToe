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

module.exports = {
    notify
}
