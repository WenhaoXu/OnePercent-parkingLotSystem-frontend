export default (state=[], action) => {

    let type = action.type;
    let payload= action.payload;

    switch (type) {
        case 'INIT':
            return {
                initData:payload
            }
        default:
            return state;
    }
}