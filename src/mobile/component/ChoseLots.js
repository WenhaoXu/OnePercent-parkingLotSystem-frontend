import React, {Component} from 'react';
import {Button, Icon, List, NavBar} from 'antd-mobile';
import {connect} from 'react-redux';


const Item = List.Item;


class ChoseLots extends Component {


    handleBack = () => {

        let dispatch = this.props.dispatch;
        dispatch({
            type: "INDICATOR",
            payload: 0
        })
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
                        onClick={()=>choseLot()}
                    >选择停车场</Item>
                </List>
                <div id="compent" style={{
                    height: '240px'
                }}/>
                {/*<Button type="primary">完成订单</Button><WhiteSpace />*/}
                <Button type="primary" disabled>完成订单</Button>
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
        choseLot:function () {
            dispatch({
                type:"INDICATOR",
                payload:2
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoseLots);


