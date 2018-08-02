import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import ParkAndTake from "./component/parkAndTake";


class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route  path='/parkAndTake' component={ParkAndTake}/>
            </Switch>
        );
    }
}

export default App;