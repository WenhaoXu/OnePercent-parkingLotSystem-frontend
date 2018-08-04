import { connect } from "react-redux";
import OrderTable from "../../component/order/orderTable";
import {getOrderList} from "../../api/orderAPI"
import {changePopupVisibleValue} from "../../action";
const mapStateToProps = (state) => {
    return {
        orderList: state.order.orderList,
        assignPopupVisible:state.order.assignPopupVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentDidMount:()=>{
            getOrderList(dispatch);
        },

        OnchangePopupVisibleValue:(visible)=>dispatch(changePopupVisibleValue(visible))


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderTable)