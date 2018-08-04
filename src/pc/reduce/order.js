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
        case 'changePopupVisibleValue':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.assignPopupVisible=action.visibleValue;
            return newState;
        }
        default:
            return state;



    }
}