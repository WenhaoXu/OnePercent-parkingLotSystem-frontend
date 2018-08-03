import React, {Component} from 'react';
import {Button, Icon, List, NavBar} from 'antd-mobile';
import {connect} from 'react-redux';
import conf from "../../pc/api/conf";


const Item = List.Item;


class ChoseLots extends Component {


    handleBack = () => {

        let dispatch = this.props.dispatch;
        dispatch({
            type: "INDICATOR",
            payload: 0
        })
    }
    postParking = () => {

        if (localStorage.getItem("choseParkingLotId") === null || localStorage.getItem("choseParkingLotId") === "") {
            alert("请选择停车地点哦！");
        }
        else {
            let dispatch = this.props.dispatch;
            let token = localStorage.getItem("token");
            let parse = JSON.parse(token);
            let orderId = localStorage.getItem("needParkingOrderId");
            fetch(`${conf.domain}/orders/${orderId}?operation=setParkingLotId&coordinatorId=${parse.userId}&parkingLotId=${localStorage.getItem("choseParkingLotId")}`, {
                method: 'PATCH',
                headers: {
                    Authorization: parse.token,
                    'Content-Type': 'application/json',
                }
                // body: JSON.stringify({
                //     operation: "setParkingLotId",
                //     coordinatorId: parse.userId,
                //     parkingLotId:localStorage.getItem("choseParkingLotId"),
                // })
            }).then(value => {
                value.json().then(value1 => {
                    localStorage.setItem("choseParkingLotId", "");
                    localStorage.setItem("needParkingOrderId", "");
                    dispatch({
                        type: "INDICATOR",
                        payload: 0
                    });
                    dispatch({
                        type: "NEED_UPDATE",
                        payload: true
                    });
                })
            })
        }

    }

    render() {


        const choseLot = this.props.choseLot;
        return (
            <div>
                <NavBar mode="dark"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => this.handleBack()}
                >选停车场</NavBar>
                <List renderHeader>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => choseLot()}
                    >选择停车场</Item>
                </List>
                <div id="compent" style={{
                    height: '240px'
                }}/>
                {/*<Button type="primary">完成订单</Button><WhiteSpace />*/}

                <Button id="completeButton" type="primary" onClick={() => this.postParking()}>完成订单</Button>
            </div>
        )
    };
}


function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        choseLot: function () {
            dispatch({
                type: "INDICATOR",
                payload: 2
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoseLots);


