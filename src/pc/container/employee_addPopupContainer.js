import {connect} from 'react-redux';
import Employee_addPopup from "../component/employee/employee_addPopup";
import {changeAddStatusMap} from '../action/index';
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({ 
  addPopupVisible: state.employee.addPopupVisible
  })

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddStatusfromMap:(addPopupVisible) => dispatch(changeAddStatusMap (addPopupVisible)),
    addEmployeefromMap:(employee)=>{
      employeeAPI.addEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_addPopup)