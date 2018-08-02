import {connect} from 'react-redux';
import Employee_table from "../component/employee/employee_table";
import {changeAddStatusMap} from '../action/index'
import employeeAPI from '../api/employeeAPI'

const mapStateToProps = (state, ownProps) =>(
    {
        addPopupVisible: state.employee.addPopupVisible,
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(addPopupVisible) => dispatch(changeAddStatusMap (addPopupVisible)),
    showEmployeeListfromMap:()=>{
      employeeAPI.getEmployeeList(dispatch);
    },
    forzenEmployeefromMap:(id)=>{
      employeeAPI.forzenEmployee(id,dispatch);
    },
   
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_table)