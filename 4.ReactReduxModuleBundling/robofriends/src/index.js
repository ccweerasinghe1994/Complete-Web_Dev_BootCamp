import './wdyr';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';
//css
import "tachyons";

import App from "./containers/App";
import {searchFieldReducer,robotsReducer} from "./redux/reducer";
import {createLogger} from 'redux-logger';
import thunk from "redux-thunk";

const rootReducer = combineReducers({searchFieldReducer,robotsReducer})
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunk ));
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
