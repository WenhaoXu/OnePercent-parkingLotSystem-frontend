import { connect } from "react-redux";
// import {changeUpdateStatusMap} from '../action/index';
import ParkingBoyTablePopup from "../../component/order/parkingBoyTablePopup";

const mapStateToProps = (state) =>({
    orderList: state.order.orderList,
    assignPopupVisible:state.order.assignPopupVisible
})


const mapDispatchToProps = (dispatch, ownProps) =>({
    // changeUpdateStatusfromMap:(updatePopupVisible) => dispatch(changeUpdateStatusMap (updatePopupVisible)),
    // updateEmployeefromMap:(employee)=>{
    //     employeeAPI.updateEmployee(employee,dispatch)
    // }
})


export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoyTablePopup)