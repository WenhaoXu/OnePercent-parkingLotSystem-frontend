export default (state={
    indicator:0
} ,action)=>{


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
                indicator:payload
            }
    }


    return state;
}