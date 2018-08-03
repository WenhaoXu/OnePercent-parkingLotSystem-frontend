import { connect } from "react-redux";
import OrderList from "../../component/order/orderList";
import {scrambleOrder1,getOrderList} from "../../api/orderAPi"

const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onScrambleOrder: (OrderId) => {
            scrambleOrder1(OrderId,dispatch)
        },
        onComponentDidMount:()=>{
            getOrderList(dispatch);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderList)