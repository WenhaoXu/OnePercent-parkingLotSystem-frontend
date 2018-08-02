import React, {Component} from 'react';
import {connect} from 'react-redux';
import OrderItem from './orderItem'

class OrderList extends Component {
    constructor(props) {
        super(props);
    }

    scrambleOrder(OrderId) {
        this.props.onScrambleOrder(OrderId)
    }

    render() {
        return (
            <div>
                {(() => {
                    console.log(this.props.orderList);
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

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(OrderList);