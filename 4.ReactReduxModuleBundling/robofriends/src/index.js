import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {createStore} from 'redux';
import {Provider} from 'react-redux';



//css
import "tachyons";
//componenta
import App from "./containers/App";
import {reducer} from "./redux/reducer";
const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
