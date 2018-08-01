import {getEmployeeListMap} from '../action/index'
import axios from 'axios';
import 'whatwg-fetch'
const employeeAPI = {
    visible:true,loading:false,
    employeeList:[],
    getEmployeeList(dispatch) {
        axios
        .get('http://localhost:1234/users')
        .then(res => {
          const employeeList = res.data;
          console.log(employeeList);
          dispatch(getEmployeeListMap(employeeList));
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    addEmployee(employee,dispatch){
      fetch('http://localhost:1234/users', {
        method: 'POST',
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
        axios
        .get('http://localhost:1234/users')
        .then(res => {
          const employeeList = res.data;
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
      axios
      .patch('http://localhost:1234/users/'+id)
      .then(res => {
        axios
        .get('http://localhost:1234/users')
        .then(res => {
          const employeeList = res.data;
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

    updateEmployee(employee,dispatch){
      fetch('http://localhost:1234/users', {
        method: 'POST',
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
        axios
        .get('http://localhost:1234/users')
        .then(res => {
          const employeeList = res.data;
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