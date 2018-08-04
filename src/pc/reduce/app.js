import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";
import order from "./order"

const appReducer = combineReducers({
    lot,employee,order
});

export default appReducer

