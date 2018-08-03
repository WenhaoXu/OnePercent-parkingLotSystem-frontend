import {getEmployeeListMap} from '../action/index'
import axios from 'axios';
import 'whatwg-fetch'

const employeeAPI = {
    visible:true,loading:false,
    employeeList:[],
    getEmployeeList(dispatch) { 
      fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
          method: 'GET',
          headers: 
            {'Authorization':localStorage.getItem("token")}
      })
      .then(response => response.json())
      .then(json => {
        const employeeList = json;
            console.log(employeeList);
            dispatch(getEmployeeListMap(employeeList));
      })
      .catch(function (ex) {
          console.log('parsing failed', ex)
      });
    },

    addEmployee(employee,dispatch){
      fetch('https://parkinglotappofsystem.herokuapp.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':localStorage.getItem("token")
        },
        body: JSON.stringify({
          phone: employee.phone,
          name: employee.name,
          email: employee.email
        })
      })
      .then(response => response.json())
      .then(json => {
        fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
          method: 'GET',
          headers:{
            'Authorization':localStorage.getItem("token")
          }
         })
        .then(response => response.json())
        .then(res => {
          const employeeList = res;
          console.log(employeeList);
          dispatch(getEmployeeListMap(employeeList));

        })
        .catch(function(error) {
          console.log(error);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    forzenEmployee(id,dispatch) {
      fetch('https://parkinglotappofsystem.herokuapp.com/users/'+id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':localStorage.getItem("token")
        }
      })
      .then(response => response.json())
      .then(res => {
        fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
          method: 'GET',
          headers: 
            {'Authorization':localStorage.getItem("token")}
        })
        .then(response => response.json())
        .then(res => {
          const employeeList = res;
          console.log(employeeList);
          dispatch(getEmployeeListMap(employeeList));

        })
      })
      .catch(function(error) {
        console.log(error);
      });
    },

    updateEmployee(employee,dispatch){
      fetch('https://parkinglotappofsystem.herokuapp.com/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':localStorage.getItem("token")
        },
        body: JSON.stringify({
          phone: employee.phone,
          name: employee.name,
          email: employee.email
        })
      })
      .then(res => {
        fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
          method: 'GET',
          headers: 
            {'Authorization':localStorage.getItem("token")}
      })
        .then(res => {
          const employeeList = res;
          console.log(employeeList);
          dispatch(getEmployeeListMap(employeeList));

        })
        .catch(function(error) {
          console.log(error);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    
};
export default employeeAPI;