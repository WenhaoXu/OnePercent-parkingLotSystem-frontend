import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Icon, NavBar} from "antd-mobile";
import './takeout.css'
class TakeOut extends Component {
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
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(
    mapStateToProps,
)(TakeOut);
