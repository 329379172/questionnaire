/**
 * Created by linfeiyang on 16-8-12.
 */
'use strict';
var redux = require('redux');

var counter = (state = 0, action) => {
    let count = action.count || 1;
    switch (action.type) {
        case 'INCREMENT':
            return state + count;
        case 'DECREMENT':
            return state - count;
        default:
            return state;
    }
};

let store = redux.createStore(counter);


store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1

module.exports = store;