import order from './order';

import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";
import history from "./history";

const appReducer = combineReducers({
    order, login, parkAndTake,history
});

export default appReducer
