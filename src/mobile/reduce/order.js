export default (state={orderList:[]}, action) => {
    switch (action.type) {
        case 'scrambleOrder':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            return newState;
        }

        case 'getOrderList':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            // console.log(newState);
            return newState;
        }
        default:
            return state;
    }
}