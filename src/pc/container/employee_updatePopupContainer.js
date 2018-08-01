import {connect} from 'react-redux';
import Employee_updatePopup from "../component/employee/employee_updatePopup";
import {changeStatusMap} from '../action/index';
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({ 
        loading: state.employee.loading,
        visible: state.employee.visible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
    updateEmployeefromMap:(employee)=>{
      employeeAPI.updateEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_updatePopup)