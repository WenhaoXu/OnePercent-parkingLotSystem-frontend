import {connect} from 'react-redux';
import Employee_header from "../component/employee/employee_header";
import {changeAddStatusMap} from '../action/index'
import employeeAPI from "../api/employeeAPI";

const mapStateToProps = (state, ownProps) =>{

    console.log(state)
    return {
      addPopupVisible:  state.employee.addPopupVisible
      };
}
  
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddStatusfromMap:(addPopupVisible) => dispatch(changeAddStatusMap (addPopupVisible)),
    searchListfromMap:(chooseMenu,inputSelectValue)=>{
        employeeAPI.searchList(chooseMenu,inputSelectValue,dispatch)
    }
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_header)
