import order from './order'
import {combineReducers} from "redux";
import login from "./login";


const appReducer = combineReducers({
    order,login
});

export default appReducer
