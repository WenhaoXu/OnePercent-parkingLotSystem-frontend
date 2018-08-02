import React, {Component} from 'react';
import {connect} from 'react-redux';
import {List, NavBar} from "antd-mobile";
import parkLogo from '../imgs/park.svg'
import takeLogo from '../imgs/take.svg'
import './parkAndTake.css'

class ParkAndTake extends Component {
    render() {
        const Item = List.Item;
        const Brief = Item.Brief;
        return (
            <div>


                <NavBar mode="dark">停取工作列表</NavBar>
                <List className="my-list">
                    <Item

                        extra={"详情"}
                        arrow="horizontal"
                        multipleLine
                        onClick={() => {
                        }}
                        thumb={parkLogo}
                        platform="android"
                    >
                        车牌号<Brief>停车时间：19：00</Brief>
                    </Item>
                    <Item

                        extra={"详情"}
                        arrow="horizontal"
                        multipleLine
                        onClick={() => {
                        }}
                        thumb={takeLogo}
                        platform="android"
                    >
                        车牌号<Brief>停车时间：19：00</Brief>
                    </Item>

                </List>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ParkAndTake);
