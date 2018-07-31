import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import appReducer from "./pc/reduce/app";
import {createStore} from "redux";
import {Provider} from "react-redux";

let el = document.getElementById('root');
let store = createStore(appReducer);

render(<Provider store={store}>
    <App/>
</Provider>, el);

registerServiceWorker();
