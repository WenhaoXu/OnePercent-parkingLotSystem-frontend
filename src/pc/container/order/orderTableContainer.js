import { connect } from "react-redux";
import OrderTable from "../../component/order/orderTable";
import {getOrderList,assignOrder} from "../../api/orderAPI"
import {getChooseOrderRecord,changePopupVisibleValue} from "../../action";
const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList,
        assignPopupVisible:state.order.assignPopupVisible,
        orderRecord:state.order.orderRecord,
        parkingBoyRecord:state.order.parkingBoyRecord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentDidMount:()=>{
            getOrderList(dispatch);
        },
        getChooseOrderRecord:(record)=>dispatch(getChooseOrderRecord(record)),
        OnchangePopupVisibleValue:(visible)=>dispatch(changePopupVisibleValue(visible)),
        OnassignOrder:(order,parkingBoy)=>{
            assignOrder(order,parkingBoy,dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderTable)