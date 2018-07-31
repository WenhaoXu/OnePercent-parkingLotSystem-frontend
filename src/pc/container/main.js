import React, {Component} from 'react';
import {connect} from 'react-redux';
import Main from "../component/main";


function mapStateToProps(state) {
    return {
        state:1
    };
}

export default connect(
    mapStateToProps,
)(Main);
