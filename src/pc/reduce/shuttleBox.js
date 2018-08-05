export default (state=[{record: 0,mockData:[],keys:[]}], action) => {
    let payload = action.payload;
    let type = action.type;
    switch (type) {
        case "INITUnManageLotDATA":
            let newState
            if(state.length==1)
             newState=[...state];
            else{
                newState=[...state.newState]
            }
            for(let i=0;i<newState.length;i++)
            {
                if(newState[i].record==payload.record){
                    newState[i].mockData=payload.mockData;
                    newState[i].keys=payload.keys;
                    return {
                        newState
                    };
                }
            };
             newState.push({record:payload.record,mockData:payload.mockData,keys:payload.keys})
            return {
               newState
            };
        case "updateUnManageLotDATA":

            let  newState1=[...state.newState];
            console.log(newState1)
            for(let index=0;index<newState1.length;index++)
            {
                if(newState1[index].record==payload.record){
                    newState1[index].mockData=payload.mockData;
                    newState1[index].keys=payload.keys;
                    return {
                        newState:newState1
                    };
                }
            };
            // newState1.push({record:payload.record,mockData:payload.mockData,keys:payload.keys})
            return {
                newState:newState1
            };

        default:
            return state;
    }
}
