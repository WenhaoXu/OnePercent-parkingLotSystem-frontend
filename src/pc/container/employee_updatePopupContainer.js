import {connect} from 'react-redux';
import Employee_updatePopup from "../component/employee/employee_updatePopup";
import {changeUpdateStatusMap} from '../action/index';
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({

    updatePopupVisible: state.employee.updatePopupVisible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeUpdateStatusfromMap:(updatePopupVisible) => dispatch(changeUpdateStatusMap (updatePopupVisible)),
    updateEmployeefromMap:(employee)=>{
      employeeAPI.updateEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_updatePopup)