import _ from 'lodash';
import $ from 'jquery';

const PLAYER_1_TOKEN = 'O';
const PLAYER_2_TOKEN = 'X';

class XOBoard {

  constructor() {
  }

  eachCell(callback) {

    _.forEach(this.board, (arr, row) => {


      _.forEach(arr, (value, col) => {

        if(callback) callback(value, row, col);
      });
    });
  }

  
}
export default XOBoard;
