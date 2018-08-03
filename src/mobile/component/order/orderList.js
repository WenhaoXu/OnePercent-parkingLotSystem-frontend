import React, {Component} from 'react';
import OrderItem from './orderItem';
import {NavBar} from "antd-mobile";

export default class  OrderList extends Component {
    constructor(props) {
        super(props);
    }

    scrambleOrder=(OrderId) =>{
        // let history= this.props;
        // console.log(history)
        this.props.onScrambleOrder(OrderId);
    }

    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">订单列表</NavBar>
                {(() => {
                    //console.log(this.props.orderList);
                    return this.props.orderList.map(order => (
                        <OrderItem
                            order={order}
                            key={order.id}
                            scrambleOrderHandler={() => this.scrambleOrder(order.id)}
                        />
                    ));
                })()}
            </div>
        );
    }
}
