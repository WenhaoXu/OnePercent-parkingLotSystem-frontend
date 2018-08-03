import order from './order';

import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";
import history from "./history";
import takeout from "./takeout";
import parkAndTakeRefresh  from "./parkAndTakeRefresh";

const appReducer = combineReducers({
    order, login, parkAndTake,history,takeout,parkAndTakeRefresh
});

export default appReducer
