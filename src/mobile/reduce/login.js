export default (state=[], action) => {

    let type = action.type;
    let payload = action.payload;
    console.log(payload)

    switch (type) {
        case "LOGIN":

            console.log(payload)
            return state;

        default:
            return state;
    }
}