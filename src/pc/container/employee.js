import React, {Component} from 'react';
import {connect} from 'react-redux';
import Employee from "../component/employee";


function mapStateToProps(state) {
    return {
        loading: state.loading,
        visible: state.visible
    };
}

export default connect(
    mapStateToProps,
)(Employee);
