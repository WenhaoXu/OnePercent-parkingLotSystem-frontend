import React from 'react';
import Employee_tableContainer from '../../container/employee_tableContainer';
import Employee_headerContainer from '../../container/employee_headerContainer';
import Employee_addPopupContainer from '../../container/employee_addPopupContainer';
import Employee_upPopupContainer from '../../container/employee_updatePopupContainer'
class Employee extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const showEmployeeListfromMap = this.props.showEmployeeListfromMap;
   
    fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
        method: 'GET',
        headers: 
          {'Authorization':localStorage.getItem("token")}
    })
    .then(response => response.json())
    .then(json => {
      const employeeList = json;
      console.log(employeeList);
      showEmployeeListfromMap(employeeList);
    })
    .catch(function (ex) {
        console.log('parsing failed', ex)
    });
  }

  render() {
    return (
        <div>
        <Employee_headerContainer/>
        <Employee_tableContainer/>
        <Employee_addPopupContainer/>
        {/* <Employee_upPopupContainer/> */}
  </div>
    );
  }
}

export default Employee;
