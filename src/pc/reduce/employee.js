export default (state={
    addPopupVisible:false,
    updatePopupVisible:false,
    employeeList:[],
    checkValue:"",
    AddPopStatus:false,
    popPassWordValue:[]
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
            newState.employeeList=action.employeeList.filter(employee=>employee.id!=1);
            return newState;
        }
        case 'getChooseValue':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.chooseValue=action.chooseValue;
            if(action.chooseValue.roles.length>0)
                newState.checkValue=action.chooseValue.roles[0].id;
            else
                newState.checkValue="";
            newState.updatePopupVisible=true;
            return newState;
        }
        case 'setCheckValue':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.checkValue=action.checkValue;
            return newState;
        }
        case 'popNameAndPassWord':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.AddPopStatus=true;
            newState.popPassWordValue=action.popPassWordValue;
            return newState;
        }
        case 'changeAddPopStatus':{
            const newState =JSON.parse(JSON.stringify(state));
            newState.AddPopStatus=action.AddPopStatus;
            return newState;
        }
        default:
            return state;
    }
}