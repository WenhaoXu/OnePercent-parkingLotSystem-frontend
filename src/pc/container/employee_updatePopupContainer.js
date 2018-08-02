import {connect} from 'react-redux';
import Employee_updatePopup from "../component/employee/employee_updatePopup";
import {changeUpdateStatusMap} from '../action/index';
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>({ 

        visible: state.employee.visible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeUpdateStatusfromMap:(visible) => dispatch(changeUpdateStatusMap (visible)),
    updateEmployeefromMap:(employee)=>{
      employeeAPI.updateEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_updatePopup)