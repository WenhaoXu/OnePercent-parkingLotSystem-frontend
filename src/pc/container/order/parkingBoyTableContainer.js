import { connect } from "react-redux";
import {getUseableParkingBoy} from "../../api/parkingBoyApi"
import ParkingBoyTable from "../../component/order/parkingBoyTable";
import {getParkingBoyRecord} from "../../action";
const mapStateToProps = (state) => {
    return {
        parkingBoyList: state.parkingBoy.parkingBoyList,
        assignPopupVisible:state.order.assignPopupVisible,
        orderRecord:state.order.orderRecord,
        parkingBoyRecord:state.order.parkingBoyRecord
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentDidMount:()=>{
            getUseableParkingBoy(dispatch);
        },
        getParkingBoyRecord:(record)=>dispatch(getParkingBoyRecord(record)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoyTable)