import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon, NavBar} from "antd-mobile";
import './takeout.css'

import takeoutApi from '../api/takeout'

class TakeOut extends Component {

    orderId;

    componentWillMount() {
        this.orderId = this.props.state.orderId;
        let parkingLotId = this.props.state.lotId;
        takeoutApi.retrieveLot(this.props.dispatch, parkingLotId)

    }

    handleUnpark(orderId) {
        takeoutApi.endOrder(this.props.dispatch,orderId)
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.dispatch({
                        type: "INDICATOR",
                        payload: 0
                    })}
                >取车停车场</NavBar>
                <p id="lot">
                    {this.props.parkName}
                </p>
                <Button id="button" type="primary" onClick={() => this.handleUnpark(this.orderId)}>完成取车</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let name;
    if (state.takeout.initData != null) {
        name = state.takeout.initData.name
    }
    return {
        state: state.parkAndTake.unpark,
        parkName: name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
)(TakeOut);
