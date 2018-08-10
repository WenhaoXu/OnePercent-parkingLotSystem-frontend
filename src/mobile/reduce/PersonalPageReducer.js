
const initState = {
    pageIndicator: 0
};

export default (ownState, action) => {
    let newState;
    switch(action.type){
        case 1:
            newState = {
                pageIndicator: 1,
                accountInfo: action.value.accountInfo
            };
            return newState;
        case 2:
            newState = {
                pageIndicator: 2,
                leavings: action.value
            }
            return newState;
        case 3:
            newState = {
                pageIndicator: 3,
                leavingDetails: action.value
            }
            return newState;

    }
    return initState;
}