import React from 'react';
import Employee_tableContainer from '../../container/employee_tableContainer';
import Employee_headerContainer from '../../container/employee_headerContainer';
import Employee_popupContainer from '../../container/employee_popupContainer';
import axios from 'axios';
class Employee extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const showEmployeeListfromMap = this.props.showEmployeeListfromMap;
    axios
      .get('http://localhost:1234/users')
      .then(res => {
        const employeeList = res.data;
        console.log(employeeList);
        showEmployeeListfromMap(employeeList);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
        <div>
        <Employee_headerContainer/>
        <Employee_tableContainer/>
        <Employee_popupContainer/>
  </div>
    );
  }
}

export default Employee;
