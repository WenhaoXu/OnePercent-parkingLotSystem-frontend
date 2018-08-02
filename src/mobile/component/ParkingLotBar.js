import React, {Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';
import ChoseLot from './ChoseLots.js'

export default class ParkingLotBar extends Component {

    render() {
        return (
            <div>
                <ChoseLot/>
            </div>
        );
    }
}