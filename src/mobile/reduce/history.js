export default (state={
    historyList:[]
}, action) => {

    switch (action.type) {
        case 'getHistoryList':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.historyList=action.historyList;

            return newState;
        }
        default:
            return state;
    }
}