import {connect} from 'react-redux';
import Employee from "../component/employee/employee";
import {changeStatusMap,getEmployeeListMap} from '../action/index';
import employeeAPI from '../api/employeeAPI';

const mapStateToProps = (state, ownProps) =>({
        loading: state.employee.loading,
        visible: state.employee.visible,
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
    showEmployeeListfromMap:(employeeList)=> dispatch(getEmployeeListMap (employeeList))
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee)