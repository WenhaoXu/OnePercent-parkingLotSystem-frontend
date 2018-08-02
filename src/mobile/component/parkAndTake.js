import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, NavBar} from "antd-mobile";
import parkLogo from '../imgs/park.svg'
import takeLogo from '../imgs/take.svg'
import './parkAndTake.css'
import ChoseLots from "./ChoseLots";
import LotList from "./ParkingLotList";

class ParkAndTake extends Component {


    handleChangeIndicator = (index) => {
        let dispatch = this.props.dispatch;
        dispatch({
            type: "INDICATOR",
            payload: index
        })

    }

    render() {
        const Item = List.Item;
        const Brief = Item.Brief;
        let index = <div>
            <NavBar mode="dark">停取工作列表</NavBar>
            <List className="my-list">
                <Item
                    extra={"详情"}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => this.handleChangeIndicator(1)}
                    thumb={parkLogo}
                    platform="android"
                >
                    车牌号<Brief>停车时间：19：00</Brief>
                </Item>
                <Item
                    extra={"详情"}
                    arrow="horizontal"
                    multipleLine
                    onClick={() => this.handleChangeIndicator(3)}
                    thumb={takeLogo}
                    platform="android"
                >
                    车牌号<Brief>停车时间：19：00</Brief>
                </Item>

            </List>
        </div>;
        let choseLot = <ChoseLots/>

        console.log(this.props.indicator)
        switch (this.props.indicator) {
            case 0:
                return index;
            case 1:
                return choseLot;
            case 2:
                return <LotList/>

        }
    }
}

function mapStateToProps(state) {
    return {
        indicator: state.parkAndTake.indicator
    };
}

function mapDispatchToProps(dispatch) {
    return {dispatch}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkAndTake);
