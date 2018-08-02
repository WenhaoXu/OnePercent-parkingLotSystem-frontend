import {connect} from 'react-redux';
import Employee_addPopup from "../component/employee/employee_addPopup";
import {changeStatusMap} from '../action/index';
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({ 
        visible: state.employee.visible
  })

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible) => dispatch(changeStatusMap (visible)),
    addEmployeefromMap:(employee)=>{
      employeeAPI.addEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_addPopup)