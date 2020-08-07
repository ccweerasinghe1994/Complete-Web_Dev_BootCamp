import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//css
import "tachyons";

import App from "./containers/App";
import {reducer} from "./redux/reducer";
import {createLogger} from 'redux-logger';

const logger = createLogger();
const store = createStore(reducer,applyMiddleware(logger));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
