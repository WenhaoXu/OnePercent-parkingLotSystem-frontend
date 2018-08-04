export default (
    state={
        orderList:[],
        assignPopupVisible:false,
    },
    action) => {

    switch (action.type) {
        case 'getAllOrder':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            return newState;
        }
        case 'changePopupValue':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.assignPopupVisible=true;
            return newState;
        }
        default:
            return state;



    }
}