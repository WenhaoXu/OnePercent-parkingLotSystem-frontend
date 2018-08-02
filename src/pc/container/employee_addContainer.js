import {connect} from 'react-redux';
import employee_add from "../component/employee/employee_add";
import employeeAPI from '../api/employeeAPI';
import {changeAddStatusMap} from '../action/index';

const mapStateToProps = (state, ownProps) =>({ 
        loading: state.employee.loading,
        visible: state.employee.visible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeAddStatusMap (visible,loading)),
    addEmployeefromMap:(employee)=>{
      employeeAPI.addEmployee(employee,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(employee_add)