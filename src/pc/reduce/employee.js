export default (state={
    addPopupVisible:false,
    updatePopupVisible:false,
    employeeList:[]
}, action) => {

    switch (action.type) {
        case 'changeAddStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.addPopupVisible=action.addPopupVisible;
            return newState;
        }
        case 'changeUpdateStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.updatePopupVisible=action.updatePopupVisible;
            return newState;
        }
        case 'getEmployeeList':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.employeeList=action.employeeList;
            return newState;
        }
        default:
            return state;
    }
}