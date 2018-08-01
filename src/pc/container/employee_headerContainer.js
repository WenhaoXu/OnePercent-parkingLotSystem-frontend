import {connect} from 'react-redux';
import Employee_header from "../component/employee_header";
import {changeStatusMap} from '../action/index'

const mapStateToProps = (state, ownProps) =>({
    loading: state.loading,
        visible: state.visible
  })
  

const mapDispatchToProps = (dispatch, ownProps) =>({
    changeStatusfromMap:(visible,loading) => dispatch(changeStatusMap (visible,loading)),
  })
export default connect(mapStateToProps, mapDispatchToProps)(Employee_header)
