export default (state={orderList:[]}, action) => {

    switch (action.type) {
        case 'getAllOrder':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.orderList=action.orderList;
            return newState;
        }
        default:
            return state;



    }
}