export default (state = {initData: null}, action) => {

    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case 'GETLOT':
            return {
                initData: payload
            }
        default:
            return state;
    }
}