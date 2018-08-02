import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import OrderList from "./container/orderListContainer";
import ParkAndTake from "./component/parkAndTake";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>

                <Route exact path='/orderList' component={OrderList}/>

                <Route  path='/parkAndTake' component={ParkAndTake}/>

            </Switch>
        );
    }
}

export default App;