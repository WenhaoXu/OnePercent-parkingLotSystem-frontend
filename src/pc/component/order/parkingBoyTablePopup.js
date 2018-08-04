import React, { Component } from 'react';
import {Modal} from 'antd'
import ParkingBoyTableContainer from "../../container/order/parkingBoyTableContainer";;

export default class ParkingBoyTablePopup extends Component {
    constructor(props){
        super(props);
    }

    // handleOk=()=>{
    //     const changeUpdateStatusfromMap = this.props.changeUpdateStatusfromMap;
    //     changeUpdateStatusfromMap(false);
    // }
    //
    // handleCancel=()=>{
    //     const changeUpdateStatusfromMap = this.props.changeUpdateStatusfromMap;
    //     changeUpdateStatusfromMap(false);
    // }

    render() {
        return (
            <Modal
                visible={this.props.assignPopupVisible}
                title="空闲停车员"
                // onOk={this.handleOk}
                // onCancel={this.handleCancel}
                // footer={null}
            >
                <ParkingBoyTableContainer />
            </Modal>
        );
    }
}

