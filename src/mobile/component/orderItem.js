import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List,Button } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;

class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    scrambleOrder = () =>  {
        console.log("抢单");
        // this.props.scrambleOrderHandler(orderId);
    }

    render() {
        const {order}=this.props;
        console.log("item"+order);
        return (
            <div>
                <List className="my-list">
                    <Item
                        extra={<Button type="primary" size="big" onClick={this.scrambleOrder}>抢单</Button>}
                        arrow="horizontal"
                        thumb="http://img0.imgtn.bdimg.com/it/u=924132525,1629032619&fm=27&gp=0.jpg"
                        multipleLine
                        onClick={() => {}}
                    >
                        order.carNo <Brief>停车时间：order.time</Brief>
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
)(OrderItem);