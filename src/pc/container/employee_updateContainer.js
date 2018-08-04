import {connect} from 'react-redux';
import employee_update from "../component/employee/employee_update";
import employeeAPI from '../api/employeeAPI';
import { changeUpdateStatusMap,setCheckValueMap} from '../action/index';

const mapStateToProps = (state, ownProps) =>({ 
    updatePopupVisible: state.employee.updatePopupVisible,
    chooseValue:state.employee.chooseValue,
    checkValue:state.checkValue
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeUpdateStatusfromMap:(updatePopupVisible) => dispatch(changeUpdateStatusMap (updatePopupVisible)),
    updateEmployeefromMap:(employee)=>{
      employeeAPI.updateEmployee(employee,dispatch);
    },
    setCheckValuefromMap:(checkValue)=>dispatch(setCheckValueMap (checkValue))
  })
export default connect(mapStateToProps, mapDispatchToProps)(employee_update)