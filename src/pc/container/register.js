import {connect} from 'react-redux';
import Register from "../component/register";


function mapStateToProps(state) {
    return {
        state:1
    };
}

export default connect(
    mapStateToProps,
)(Register);
