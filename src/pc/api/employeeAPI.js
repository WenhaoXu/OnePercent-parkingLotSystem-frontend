import {getEmployeeListMap,setPopPassWordfromMap} from '../action/index'
import 'whatwg-fetch'
import {setPopPassWordMap} from "../action";
import axios from 'axios'

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
            email: employee.email,
            userName: employee.userName,
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
          dispatch(setPopPassWordMap(json));
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
      .then(res => {
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

    updateEmployee(employee,dispatch){
      fetch(`https://parkinglotappofsystem.herokuapp.com/users/${employee.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':localStorage.getItem("token")
        },
        body: JSON.stringify({
            id: employee.id,
            phone: employee.phone,
            userName: employee.userName,
            name: employee.name,
            email: employee.email,
            roles:employee.roles
        })
      })
      .then(res => {
        fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
          method: 'GET',
          headers: 
            {'Authorization':localStorage.getItem("token")}
      }).then(response => response.json())
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
    searchList(chooseMenu,inputSelectValue,dispatch) {
        // axios({
        //     url: 'http://localhost:1234/users/phone/1',
        //     method: 'GET',
        //     headers: {Authentication: localStorage.getItem("token")},
        // }).then(response => console.log(response.status))


        fetch(`http://localhost:1234/users/phone/1`, {
            method: 'GET',
            headers: {
                'Authorization':localStorage.getItem("token")}
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
    }

};
export default employeeAPI;