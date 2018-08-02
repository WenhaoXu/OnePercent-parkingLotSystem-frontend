import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import OrderList from "./component/orderList";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact path='/orderList' component={OrderList}/>
            </Switch>
        );
    }
}

export default App;