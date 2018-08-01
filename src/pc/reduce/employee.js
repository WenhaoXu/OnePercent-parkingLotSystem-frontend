export default (state={
    visible:false,
    loading:false,
    employeeList:[]
}, action) => {

    switch (action.type) {
        case 'changeStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.visible=action.visible;
            newState.loading=action.loading;
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