import {connect} from 'react-redux';
import history from "../component/history";
import {getHistoryListMap} from "../../mobile/action";

const mapStateToProps = (state, ownProps) =>({
    historyList: state.history.historyList
})


const mapDispatchToProps = (dispatch, ownProps) =>({
    showHistoryListfromMap:(historyList)=>dispatch(getHistoryListMap (historyList))
})
export default connect(mapStateToProps, mapDispatchToProps)(history)