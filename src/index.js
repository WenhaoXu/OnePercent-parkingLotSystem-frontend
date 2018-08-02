import React from 'react';
import {render} from 'react-dom';
import App from './pc/App';
import MobileApp from './mobile/App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import appReducer from "./pc/reduce/app";
import mobileAppReducer from "./mobile/reduce/app";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let el = document.getElementById('root');


if(isPc()){

    let store = createStore(appReducer);
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        el);
    registerServiceWorker();
}else{

    let store = createStore(mobileAppReducer);
    render(
        <BrowserRouter>
            <Provider store={store}>
                <MobileApp/>
            </Provider>
        </BrowserRouter>,
        el);
    registerServiceWorker();
}


/**
 * @return {boolean}
 */
function isPc() {
    const userAgentInfo = navigator.userAgent;
    const Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
       if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
       }
    }
    return flag;
 }