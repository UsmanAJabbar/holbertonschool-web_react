import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';

import App from './App/App';

import { rootReducer, rootReducerInitialState } from './reducers/rootReducer';

import './assets/reset.css';
import './index.css';

const store = createStore(
  combineReducers(rootReducer),
  rootReducerInitialState,
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
