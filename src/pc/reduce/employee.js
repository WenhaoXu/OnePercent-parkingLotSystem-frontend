export default (state={
    addPopupVisible:false,
    employeeList:[]
}, action) => {

    switch (action.type) {
        case 'changeAddStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.addPopupVisible=action.addPopupVisible;
            return newState;
        }
        case 'getEmployeeList':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.employeeList=action.employeeList;
            return newState;
        }
        case 'addEmployee':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.employeeList=action.employeeList;
            return newState;
        }
        default:
            return state;
    }
}