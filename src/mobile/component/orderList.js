import React, {Component} from 'react';
import OrderItem from '../component/orderItem';

export default class  OrderList extends Component {
    constructor(props) {
        super(props);
    }

    scrambleOrder(OrderId) {
        this.props.onScrambleOrder(OrderId);
    }

    componentDidMount() {
        this.props.onComponentDidMount()
    }

    render() {
        return (
            <div>
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
