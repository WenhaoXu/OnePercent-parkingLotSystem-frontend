
const initState = {
    pageIndicator: 0
};

export default (ownState, action) => {
    switch(action.type){
        case 1:
            let newState = {
                pageIndicator: 1,
                accountInfo: action.value.accountInfo
            };
            return newState;
    }
    return initState;
}