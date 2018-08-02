import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import ParkAndTake from "./component/parkAndTake";
import TakeOut from "./component/takeout";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route  path='/parkAndTake' component={ParkAndTake}/>
                <Route  path='/takeout' component={TakeOut}/>
            </Switch>
        );
    }
}

export default App;