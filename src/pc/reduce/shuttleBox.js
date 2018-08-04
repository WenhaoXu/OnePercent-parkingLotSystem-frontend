export default (state={}, action) => {
    let payload = action.payload;
    let type = action.type;
    switch (type) {
        case "INITUnManageLotDATA":
            return {
               payload
            };
        default:
            return state;
    }
}
