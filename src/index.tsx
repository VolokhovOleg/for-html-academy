import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer/reducer';
import {Sprite} from './components/Sprite/Sprite';
import {api} from './api/api';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
  <Provider store={store}>
    <Sprite />
  </Provider>,
  document.getElementById(`root`)
);
