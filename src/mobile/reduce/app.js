import order from './order';

import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";
import history from "./history";
import parkingLotList from "./parkingLotList"
import takeout from "./takeout";
import parkAndTakeRefresh  from "./parkAndTakeRefresh";
import PersonalPageReducer from "./PersonalPageReducer";

const appReducer = combineReducers({
    order, login, parkAndTake,history,takeout,parkAndTakeRefresh,parkingLotList, PersonalPageReducer
});

export default appReducer
