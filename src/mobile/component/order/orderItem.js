import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List,Button } from 'antd-mobile';


const Item = List.Item;
const Brief = Item.Brief;

export default class OrderItem extends Component {
    constructor(props) {
        super(props);
    }

    scrambleOrder(orderId)  {
        this.props.scrambleOrderHandler(orderId);
    }

    render() {
        const {order}=this.props;
        let createDate=new Date(order.createDate).toLocaleString('chinese',{hour12:false});
        return (
            <div>
                <List className="my-list">
                    <Item
                        extra={<Button type="primary" size="big" onClick={()=>this.scrambleOrder(order.id)}>抢单</Button>}
                        arrow="horizontal"
                        thumb="http://img0.imgtn.bdimg.com/it/u=924132525,1629032619&fm=27&gp=0.jpg"
                        multipleLine
                        onClick={() => {}}
                    >
                        {order.carNo} <Brief>停车时间：{createDate}</Brief>
                    </Item>
                </List>
            </div>
        );
    }
}

