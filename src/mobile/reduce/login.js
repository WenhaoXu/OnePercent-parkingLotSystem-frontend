export default (state=[], action) => {

    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case "LOGIN":
            return state;

        default:
            return state;
    }
}