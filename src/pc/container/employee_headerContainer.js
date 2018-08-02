import {connect} from 'react-redux';
import Employee_header from "../component/employee/employee_header";
import {changeAddStatusMap} from '../action/index'

const mapStateToProps = (state, ownProps) =>{

    console.log(state)
    return {
            visible:  state.employee.visible
      };
}
  
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddStatusfromMap:(addVisible) => dispatch(changeAddStatusMap (addVisible)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_header)
