import _ from 'lodash';
import $ from 'jquery';
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

module.exports = {
    notify,
}
