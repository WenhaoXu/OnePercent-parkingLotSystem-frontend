export default (state={}, action) => {
    let payload = action.payload;
    let type = action.type;
    switch (type) {
        case "INIT":
            console.log(JSON.stringify(payload))
            return {
                dataSource: payload
            };
        default:
            return state;
    }
}

