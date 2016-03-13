import React from 'react';
import {combineReducers, createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

const some_state = {
    full_tree: [
        {msg: 'hello'},
        {msg: 'hello'},
        {msg: 'hello'},
        {msg: 'hello'},
    ],
    current_move: 0
};

function test1(state = 0, action) {
    console.log(state);
    return state;
}

function test2(state = 'roar', action) {
    console.log(state);
    return state;
}

//const reducers = combineReducers({
    //test1, test2
//});
const store = createStore(test1);

render(
    <Provider store={store}>
        <div></div>
    </Provider>,
    document.getElementById('app')
);
