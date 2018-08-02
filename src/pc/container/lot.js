import Lot from '../component/lot'
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {
        dataSource:state.lot.dataSource
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lot);
