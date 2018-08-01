import Lot from '../component/lot'
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {
        data:[]
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lot);
