export default (state = {
    indicator: 0,
    indexData: [],
    unpark: {
        lotId: null,
        orderId: null,
    }
}, action) => {


    /**
     * indicator :0 代表停取页面
     *              1停车子页面 2 停车子子页面
     *              3 取车子页面 4.;.
     */

    let type = action.type;
    let payload = action.payload;

    switch (type) {
        case "INDICATOR":
            return {
                indicator: payload,
                indexData: state.indexData,
                unpark: state.unpark
            };
        case "INIT":
            return {
                indicator: state.indicator,
                indexData: payload,
                unpark: state.unpark

            };
        case "UNPARK":
            let lotId = payload.parkingLotId;
            let orderId = payload.orderId;
            return {
                indicator: state.indicator,
                indexData: state.indexData,
                unpark: {
                    lotId,
                    orderId
                }
            }
    }


    return state;
}