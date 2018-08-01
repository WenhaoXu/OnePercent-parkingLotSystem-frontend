import {getEmployeeListMap} from '../action/index'
import axios from 'axios';
const employeeAPI = {
    visible:true,loading:false,
    employeeList:[],
    getEmployeeList(dispatch) {
        axios
        .get('http://localhost:1234/users')
        .then(res => {
          const employeeList = res.data;
          console.log(employeeList);
          getEmployeeListMap(employeeList);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
};
export default employeeAPI;