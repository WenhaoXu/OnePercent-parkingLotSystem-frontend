import { connect } from "react-redux";
import {getOrderList, searchOrder} from "../../api/orderAPI"
import OrderHeader from "../../component/order/orderHeader";
const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        OnSearch:(type,content)=>{
            searchOrder(type,content,dispatch);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderHeader)