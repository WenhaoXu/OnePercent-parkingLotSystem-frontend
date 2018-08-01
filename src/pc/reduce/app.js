import addLot from "./addLot";
import {combineReducers} from "redux";
import employee from "./employee";

const appReducer = combineReducers({
    addLot,employee
})

export default appReducer

