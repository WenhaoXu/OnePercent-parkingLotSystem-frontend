import {connect} from 'react-redux';
import employee_add from "../component/employee/employee_add";
import employeeAPI from '../api/employeeAPI';
import {changeAddStatusMap} from '../action/index';

const mapStateToProps = (state, ownProps) =>({ 
  addPopupVisible: state.employee.addPopupVisible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddStatusfromMap:(addPopupVisible) => dispatch(changeAddStatusMap (addPopupVisible)),
    addEmployeefromMap:(employee)=>{
      employeeAPI.addEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(employee_add)