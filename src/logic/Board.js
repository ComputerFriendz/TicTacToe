import _ from 'lodash';
import $ from 'jquery';

const PLAYER_1_TOKEN = 'O';
const PLAYER_2_TOKEN = 'X';

class XOBoard {

  constructor() {
    this.reset()
  }

  eachCell(callback) {

    _.forEach(this.board, (arr, row) => {


      _.forEach(arr, (value, col) => {

        if(callback) callback(value, row, col);
      });
    });
  }

  reset() {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    this.eachCell((value, row, col) => {
      $('#cell-' + row + '-' + col).html('').attr('disabled', false);
    });
  }
}
export default XOBoard;
