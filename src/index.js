import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/router';
import registerServiceWorker from './registerServiceWorker';

import { createStore  } from 'redux'
import { Provider } from 'react-redux'

let initState = {
    isLoading:false
};
function counter(state, action) {
    switch (action.type) {
        case 'showLoading':
            return { isLoading :true};
        case 'hideLoading':
            return { isLoading :false};
        default:
            return state
    }
}
const store = createStore(counter, initState);
ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
