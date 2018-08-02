import {getEmployeeListMap} from '../action/index'
import axios from 'axios';
import 'whatwg-fetch'

const employeeAPI = {
    visible:true,loading:false,
    employeeList:[],
    getEmployeeList(dispatch) { 
      fetch(`http://localhost:1234/users`, {
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
      fetch('http://localhost:1234/users', {
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
        fetch(`http://localhost:1234/users`, {
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
      fetch('http://localhost:1234/users/'+id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':localStorage.getItem("token")
        }
      })
      .then(response => response.json())
      .then(res => {
        fetch(`http://localhost:1234/users`, {
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
      fetch('http://localhost:1234/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phone: employee.phone,
          name: employee.name,
          email: employee.email
        })
      })
      .then(res => {
        fetch(`http://localhost:1234/users`, {
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