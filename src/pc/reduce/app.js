import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";
import parkingBoy from "./parkingBoy"

const appReducer = combineReducers({
    lot,employee,parkingBoy
});

export default appReducer

