import _ from 'lodash';
import tictactoe from '../logic/tictactoe'


function getMessage() {
    return fetch('/api/tictactoe/hugbi').then(res =>
        res.json()
    ).then(json => {
        return json.tictactoe
    }).catch(err => err);
}

function component() {
    let element = document.createElement('div');
    const helloGreeting = tictactoe('name');
    if (process.env.NODE_ENV !== 'production') {
        console.log('you are in devel mode');
    }
    getMessage().then(val => element.innerHTML = _.join([helloGreeting]))
    return element;
}
document.body.appendChild(component());