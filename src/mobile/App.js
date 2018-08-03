import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import OrderList from "./container/order/orderListContainer";
import mobileMain from "./component/mobileMain";
import Login from "./component/login";
import ParkAndTake from "./component/parkAndTake";
import TakeOut from "./component/takeout";
import History from "./container/historyContainer";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>

                <Route exact path='/orderList' component={OrderList}/>

                <Route  path='/parkAndTake' component={ParkAndTake}/>

                <Route exact path='/mobile/main' component={mobileMain}/>
                <Route exact path='/mobile/login' component={Login}/>
                <Route  path='/parkAndTake' component={ParkAndTake}/>
                <Route  path='/history' component={History}/>
                <Route  path='/takeout' component={TakeOut}/>
            </Switch>
        );
    }
}

export default App;