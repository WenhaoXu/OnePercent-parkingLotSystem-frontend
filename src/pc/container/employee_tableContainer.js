import {connect} from 'react-redux';
import Employee_table from "../component/employee/employee_table";
import {changeStatusMap} from '../action/index'
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({
        loading: state.employee.loading,
        visible: state.employee.visible,
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
    showEmployeeListfromMap:()=>{
      employeeAPI.getEmployeeList(dispatch);
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_table)