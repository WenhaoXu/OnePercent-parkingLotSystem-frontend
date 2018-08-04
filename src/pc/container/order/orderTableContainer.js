import { connect } from "react-redux";
import OrderTable from "../../component/order/orderTable";
import {getOrderList} from "../../api/orderAPI"
const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentDidMount:()=>{
            getOrderList(dispatch);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderTable)