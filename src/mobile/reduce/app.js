import order from './order';

import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";
import history from "./history";
import parkingLotList from "./parkingLotList"

const appReducer = combineReducers({
    order, login, parkAndTake,history,parkingLotList
});

export default appReducer
