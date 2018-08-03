import React, {Component} from 'react';
import './App.css';
import Main from "./container/main";
import {Route, Switch} from "react-router-dom";
import Login from "./component/login";
import employee_add from './component/employee/employee_add';
import EmployeeContainer from './container/employeeContainer';
// import OrderList from "./container/order/orderListContainer";
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
            {/*<Route path='/orderList' component={OrderList}/>*/}
        </Switch>
    );
  }
}

export default App;
