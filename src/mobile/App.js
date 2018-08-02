import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import mobileMain from "./component/mobileMain";
import Login from "./component/login";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact path='/mobile/main' component={mobileMain}/>
                <Route exact path='/mobile/login' component={Login}/>
            </Switch>
        );
    }
}

export default App;