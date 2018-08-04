import lot from "./lot";
import {combineReducers} from "redux";
import employee from "./employee";
import DashBoardReducer from './DashBoardReducer';

const appReducer = combineReducers({
    lot,employee, DashBoardReducer
});

export default appReducer

