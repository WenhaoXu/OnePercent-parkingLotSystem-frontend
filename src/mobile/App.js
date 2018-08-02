import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "./component/index";
import mobileMain from "./component/mobileMain";
import Login from "./component/login";
// import ParkAndTake from "../component/parkAndTake";
import PullRefresh from "./component/pullRefresh";

class App extends Component {

    render() {
        return (
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact path='/mobile/main' component={mobileMain}/>
                <Route exact path='/mobile/login' component={Login}/>
                <Route  path='/parkAndTake' component={PullRefresh}/>
                <Route  path='/pullRefresh' component={PullRefresh}/>
            </Switch>
        );
    }
}

export default App;