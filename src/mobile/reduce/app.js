import order from './order'
import {combineReducers} from "redux";
import login from "./login";
import parkAndTake from "./parkAndTake";


const appReducer = combineReducers({
    order, login, parkAndTake
});

export default appReducer
