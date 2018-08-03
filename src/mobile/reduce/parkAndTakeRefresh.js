export default (state = {needUpdate:false}, action) => {

    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case 'NEED_UPDATE':
            return {
                needUpdate: payload
            }
        default:
            return state;
    }
}