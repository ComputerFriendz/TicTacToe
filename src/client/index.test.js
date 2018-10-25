import index from './index';
import _ from 'lodash';

const myFunctions = require('./index.js');
myFunctions.notify

test("Should return the message in parameter", () => {
    expect(myFunctions.notify('Hello there')).toBe('Hello there');
  });
