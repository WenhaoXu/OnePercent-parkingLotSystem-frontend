export default (state={}, action) => {
    let payload = action.payload;
    let type = action.type;
    switch (type) {
        case "INITParkingBoyDATA":
            // console.log(payload)
            return {
                dataSource: payload
            };
        case 'RELOAD_TABLE_DATA':
            let newState = {};
            newState.dataSource = action.value;
            return newState;
        default:
            return state;
    }
}

