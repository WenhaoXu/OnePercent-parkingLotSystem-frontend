import React from 'react';
import {render} from 'react-dom';
import App from './pc/App';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import appReducer from "./pc/reduce/app";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

let el = document.getElementById('root');
let store = createStore(appReducer);


if(IsPC()){
    render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        el);
    
    registerServiceWorker();
}else{
    console.log(123)
}


/**
 * @return {boolean}
 */
function IsPC() {
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