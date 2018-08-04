import { connect } from "react-redux";
import {getUseableParkingBoy} from "../../api/parkingBoyApi"
import ParkingBoyTable from "../../component/order/parkingBoyTable";
const mapStateToProps = (state) => {
    return {
        parkingBoyList: state.parkingBoy.parkingBoyList,
        assignPopupVisible:state.order.assignPopupVisible
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onComponentDidMount:()=>{
            getUseableParkingBoy(dispatch);
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkingBoyTable)