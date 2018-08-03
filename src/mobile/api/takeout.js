import 'whatwg-fetch'
import conf from './conf'
import {Toast} from "antd-mobile";

let item = localStorage.getItem("token");
let parse = JSON.parse(item);

export default {
    retrieveLot(dispatch, id) {
        fetch(`${conf.domain}/parkinglots/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': parse.token
            },
        }).then(value => {
            value.json().then(value1 => {
                dispatch({
                    type: "GETLOT",
                    payload: value1
                })
            })
        })

    },

    endOrder(dispatch, orderId) {

        // @todo 完成订单
        fetch(`${conf.domain}/orders/${orderId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': parse.token
            },
            body:JSON.stringify({
                "operation":'updateStatus',
                "status":'finished'
            })
        }).then(value => {
            value.json().then(value1 => {
               dispatch({
                   type:"INDICATOR",
                   payload:0
               })
            })
        })
    }


}