import order from './order'
import {combineReducers} from "redux";
import login from "./login";
import history from "./history"

const appReducer = combineReducers({
    order,login,history
});

export default appReducer
