import 'whatwg-fetch'
import conf from "../../pc/api/conf";

export default {

    initData(dispatch){
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        fetch(`${conf.domain}/users/${parse.userId}/unfinishedOrders`, {
            method: 'GET',
            headers: {
                Authorization:parse.token,
            },
        }).then(value => {
            value.json().then(value1 => {
                let filter = value1.filter(v=>v.status==='accepted'||v.status==='waitingToRetrieve');
                dispatch({
                    type:"INIT",
                    payload:filter
                })


            })
        })
    }
}