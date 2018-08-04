const initOwnState = {
    parkingLots: []
};

export default (ownState = initOwnState, action) => {
    switch(action.type){
        case 'REFRESH_PARKINGlOTS':
            let newState = JSON.parse(JSON.stringify(ownState));
            newState.parkingLots = action.value;
            return newState;
    }
    return ownState;
}