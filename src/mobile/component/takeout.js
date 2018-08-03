import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon, NavBar} from "antd-mobile";
import './takeout.css'
class TakeOut extends Component {

    componentWillMount() {
        let orderId = this.props.state.orderId;
        let parkingLotId= this.props.state.lotId;
        console.log(orderId)
        console.log(parkingLotId)

    }

    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => this.props.dispatch ({
                        type:"INDICATOR",
                        payload:0
                    })}
                >取车停车场</NavBar>
                <p id="lot">
                    停车场1
                </p>
                <Button id="button" type="primary" >完成取车</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        state:state.parkAndTake.unpark
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
