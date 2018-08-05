export default (
    state={
        orderList:[],
        assignPopupVisible:false,
        orderRecord:"",
        parkingBoyRecord:""
    },
    action) => {

    switch (action.type) {
        case 'getAllOrder':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            return newState;
        }
        case 'getChooseOrderRecord':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.assignPopupVisible=true;
            newState.orderRecord=action.orderRecord;
            return newState;
        }
        case 'getParkingBoyRecord':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.parkingBoyRecord=action.parkingBoyRecord;
            return newState;
        }
        case 'changePopupVisibleValue':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.assignPopupVisible=action.visibleValue;
            return newState;
        }
        case 'assignOrder':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            newState.assignPopupVisible=false;
            newState.orderRecord="";
            newState.parkingBoyRecord="";
            return newState;
        }
        default:
            return state;



    }
}