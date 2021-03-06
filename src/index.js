import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './App';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {initGoogleAnalytics} from "./utils/google-analytics";

/**
 * Redux Store
 * Enable logger middleware adding logger on applyMiddleware()
 * import { createLogger} from "redux-logger";
 * const logger = createLogger();
 * @type {Store<{}, AnyAction> & Store<S & StateExt, A> & Ext}
 */
const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk));
initGoogleAnalytics();


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
