export default (state={visible:false,loading:false,employeeList:[]}, action) => {

    switch (action.type) {
        case 'changeStatus':{
            console.log(123);
            const newState =JSON.parse(JSON.stringify(state));
            newState.visible=action.visible;
            newState.loading=action.loading;
            return newState;
        }
        default:
            return state;
    }
}