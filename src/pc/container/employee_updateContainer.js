import {connect} from 'react-redux';
import employee_update from "../component/employee/employee_update";
import employeeAPI from '../api/employeeAPI';
import { changeUpdateStatusMap} from '../action/index';

const mapStateToProps = (state, ownProps) =>({ 
  updatePopupVisible: state.employee.updatePopupVisible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeUpdateStatusfromMap:(updatePopupVisible) => dispatch(changeUpdateStatusMap (updatePopupVisible)),
    updateEmployeefromMap:(employee)=>{
      employeeAPI.updateEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(employee_update)