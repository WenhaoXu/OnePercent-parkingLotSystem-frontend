export default (state={mockData:[],keys:[]}, action) => {
    let payload = action.payload;
    let type = action.type;
    switch (type) {
        case "INITUnManageLotDATA":
            return {
                mockData:payload.mockData,
                keys:payload.keys,
            };
        case "updateUnManageLotDATA":
            return {
                mockData:payload.mockData,
                keys:payload.keys,
            };
        default:
            return state;
    }
}
