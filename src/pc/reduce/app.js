import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";
import order from "./order"

import parkingBoy from "./parkingBoy"

import DashBoardReducer from './DashBoardReducer';

const appReducer = combineReducers({
    lot,employee,order, DashBoardReducer,parkingBoy

});

export default appReducer

