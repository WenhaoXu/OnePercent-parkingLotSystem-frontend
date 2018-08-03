import {connect} from 'react-redux';
import Employee_table from "../component/employee/employee_table";
import {changeUpdateStatusMap} from '../action/index'
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>(
    {
        updatePopupVisible: state.employee.updatePopupVisible,
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeUpdateStatusfromMap:(updatePopupVisible) => dispatch(changeUpdateStatusMap (updatePopupVisible)),
    showEmployeeListfromMap:()=>{
      employeeAPI.getEmployeeList(dispatch);
    },
    forzenEmployeefromMap:(id)=>{
      employeeAPI.forzenEmployee(id,dispatch);
    },
   
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_table)