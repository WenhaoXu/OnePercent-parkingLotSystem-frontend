import {connect} from 'react-redux';
import Employee_table from "../component/employee/employee_table";
import {changeStatusMap} from '../action/index'

const mapStateToProps = (state, ownProps) =>({
        loading: state.employee.loading,
        visible: state.employee.visible,
        employeeList:state.employee.employeeList
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_table)