import {connect} from 'react-redux';
import Employee from "../component/employee";
import {changeStatusMap} from '../action/index'

const mapStateToProps = (state, ownProps) =>({
    
    loading: state.employee.loading,
        visible: state.employee.visible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee)