import conf from "../../pc/api/conf";

export  default {
    initParkingLotlist(dispatch){
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        fetch(`${conf.domain}/parkinglots?coordinatorId=${parse.userId}`, {
            method: 'GET',
            headers: {
                Authorization:parse.token,
            },
        }).then(value => {
            value.json().then(value1 => {
                console.log(value1);
                let filter = value1.filter(v=>v.available!='true');
                dispatch({
                    type:"INITPARKINGLOT",
                    payload:filter
                })
            })
        })
    }
}