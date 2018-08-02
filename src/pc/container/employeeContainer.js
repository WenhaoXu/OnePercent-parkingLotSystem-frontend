import {connect} from 'react-redux';
import Employee from "../component/employee/employee";
import {getEmployeeListMap} from '../action/index';

const mapStateToProps = (state, ownProps) =>({
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    showEmployeeListfromMap:(employeeList)=> dispatch(getEmployeeListMap (employeeList))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee)