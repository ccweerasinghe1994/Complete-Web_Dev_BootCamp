import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//css
import 'tachyons';
//componenta
import CardList from './CardList';

ReactDOM.render(
    <React.StrictMode>
       <CardList/>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
