import {connect} from 'react-redux';
import Employee_header from "../component/employee/employee_header";
import {changeAddStatusMap} from '../action/index'

const mapStateToProps = (state, ownProps) =>{

    console.log(state)
    return {
      addPopupVisible:  state.employee.addPopupVisible
      };
}
  
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddStatusfromMap:(addPopupVisible) => dispatch(changeAddStatusMap (addPopupVisible)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_header)
