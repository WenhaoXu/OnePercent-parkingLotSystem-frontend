import React, {Component} from 'react';
import {connect} from 'react-redux';

class Index extends Component {
    render() {
        return (
            <div>
                index
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Index);
