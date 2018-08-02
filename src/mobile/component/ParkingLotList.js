import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Icon, List, NavBar} from 'antd-mobile';

const Item = List.Item;

class ParkingLotList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let dispatch = this.props.dispatch;
        return (
            <div>
                <NavBar mode="dark"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => dispatch ({
                            type:"INDICATOR",
                            payload:1
                        })}
                >选停车场</NavBar>
                <List renderHeader className="my-list">
                    <Item>Title </Item>
                </List>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLotList);
