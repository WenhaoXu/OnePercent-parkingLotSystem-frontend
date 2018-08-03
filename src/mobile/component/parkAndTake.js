import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, NavBar} from "antd-mobile";
import parkLogo from '../imgs/park.svg'
import takeLogo from '../imgs/take.svg'
import './parkAndTake.css'
import ChoseLots from "./ChoseLots";
import LotList from "./ParkingLotList";
import 'whatwg-fetch'
import parkAndTakeApi from "../api/parkAndTake";
import index from "./index";
import TakeOut from './takeout'
import parkAndTakeRefresh from "../reduce/parkAndTakeRefresh";

class ParkAndTake extends Component {





    componentWillMount() {
        parkAndTakeApi.initData(this.props.dispatch)

    }

    handleChangeIndicator = (index, parkingLotId, orderId) => {
        let dispatch = this.props.dispatch;
        dispatch({
            type: "INDICATOR",
            payload: index
        })

        if (index === 3) {
            dispatch({
                type: "UNPARK",
                payload: {
                    parkingLotId, orderId
                }
            })

        }else if (index === 1) {
            localStorage.setItem("needParkingOrderId",orderId);

            //停车
        }
    };

    render() {
        let needUpdate = this.props.needUpdate;
        if (needUpdate) {
            parkAndTakeApi.initData(this.props.dispatch)
            this.props.dispatch({
                type:"NEED_UPDATE",
                payload:false
            })
        }

        const Item = List.Item;
        const Brief = Item.Brief;
        let index = <div>
            <NavBar mode="dark">停取工作列表</NavBar>
            <List className="my-list">
                {this.props.indexData.map((value, index) => {
                    let number = value.status === "accepted" ? 1 : 3;
                    return <Item
                        key={index}
                        extra={"详情"}
                        arrow="horizontal"
                        multipleLine
                        onClick={() => this.handleChangeIndicator(number, value.parkingLotId, value.id)}
                        thumb={value.status === "accepted" ? parkLogo : takeLogo}
                        platform="android"
                    >
                        {value.carNo}<Brief>停车时间：{value.createDate}</Brief>
                    </Item>
                })}


            </List>
        </div>;
        let choseLot = <ChoseLots/>

        // console.log(this.props.indicator)
        switch (this.props.indicator) {
            case 0:
                return index;
            case 1:
                return choseLot;
            case 2:
                return <LotList/>
            case 3:
                return <TakeOut/>

        }
    }
}

function mapStateToProps(state) {
    return {
        indicator: state.parkAndTake.indicator,
        indexData: state.parkAndTake.indexData,
        needUpdate:state.parkAndTakeRefresh.needUpdate
    };
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkAndTake);
