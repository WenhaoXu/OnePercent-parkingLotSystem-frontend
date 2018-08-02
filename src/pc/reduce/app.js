import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";

const appReducer = combineReducers({
    lot,employee
});

export default appReducer

