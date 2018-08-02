import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
            </Switch>
        );
    }
}

export default App;