import React, { Component } from 'react';
import './App.css';
import Main from "./pc/container/main";
import {Route, Switch} from "react-router-dom";
import Login from "./pc/component/login";
import employee_add from './pc/component/employee/employee_add';
import EmployeeContainer from './pc/container/employeeContainer';

class App extends Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/main/:page' component={Main}/>
            <Route path='/main' component={Main}/>
            <Route path='/login' component={Login}/>
            <Route path='/employee_add' component={employee_add}/>
            <Route path='/employee' component={EmployeeContainer}/>
        </Switch>
    );
  }
}

export default App;
