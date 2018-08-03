import order from './order';

import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";
import history from "./history";
import takeout from "./takeout";

const appReducer = combineReducers({
    order, login, parkAndTake,history,takeout
});

export default appReducer
