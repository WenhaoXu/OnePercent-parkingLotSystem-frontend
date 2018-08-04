import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";

import parkingBoy from "./parkingBoy"

import DashBoardReducer from './DashBoardReducer';

const appReducer = combineReducers({
    lot,employee, DashBoardReducer,parkingBoy

});

export default appReducer

