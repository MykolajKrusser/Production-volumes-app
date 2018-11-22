import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducers/reducer';

 const stateStore = createStore(reducer);

const app = (
    <Provider store={stateStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
