import React from 'react';
import Employee_tableContainer from '../../container/employee_tableContainer';
import Employee_headerContainer from '../../container/employee_headerContainer';
import Employee_popupContainer from '../../container/employee_popupContainer';
class Employee extends React.Component {
  constructor(props) {
    super(props);
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
