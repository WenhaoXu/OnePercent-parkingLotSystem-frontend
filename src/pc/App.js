import React, { Component } from 'react';
import './App.css';
import Main from "./container/main";
import {Route, Switch} from "react-router-dom";
import Login from "./component/login";
import register from './component/register';
import Employee_table from './component/employee_table';

class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/main/:page' component={Main}/>
            <Route path='/main' component={Main}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={register}/>
            <Route path='/employee' component={Employee_table}/>
        </Switch>
    );
  }
}

export default App;
