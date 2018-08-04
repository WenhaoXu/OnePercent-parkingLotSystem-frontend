import {connect} from 'react-redux';
import popPassword from "../component/employee/popPassWord";
import {changeAddPopStatusMap} from "../action";

const mapStateToProps = (state, ownProps) =>({
    AddPopStatus:state.employee.AddPopStatus,
    popPassWordValue:state.employee.popPassWordValue,
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeAddPopStatusfromMap:(chooseValue) => dispatch(changeAddPopStatusMap (chooseValue)),

  })
export default connect(mapStateToProps, mapDispatchToProps)(popPassword)