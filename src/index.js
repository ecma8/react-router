import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/router';
import registerServiceWorker from './registerServiceWorker';


import { createStore  } from 'redux'
import { Provider } from 'react-redux'

import initState from './redux/state'
import {counter} from './redux/counter'

const store = createStore(counter, initState);
ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
