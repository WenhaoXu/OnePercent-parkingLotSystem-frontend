import 'whatwg-fetch'
import conf from './conf'
import { message } from 'antd';
export default {

    initState: (dispatch) => {

        let token = localStorage.getItem("token");
        let page = 1;
        let size = 10;


        const myHeaders = new Headers();
        myHeaders.append('Authorization', token);

        fetch(`${conf.domain}/parkinglots?page=${page}&size=${size}`, {
            method: 'GET',
            headers: myHeaders,
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "INIT",
                    payload: json
                })
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    },

    add: (dispatch,name, size) => {
        let self=this;
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':token
            },
            body: JSON.stringify({
                name: name,
                totalSize: size,
            })
        }).then(value => {
            // self.initState(dispatch)
        })
    },

    update: (dispatch,id, name, totalSize, spareSize, available) => {


        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':token
            },
            body: JSON.stringify({
                id,
                name,
                totalSize,
                spareSize,
                available
            })
        })
            .then(value => {
                console.log(value.text().then(value1 => {
                    if (value1.indexOf('停车场不是') > 0) {
                        message.error(value1);
                    }
                }))
            })
            .catch(reason => {
                reason.body
                console.log(reason)
            })
    }

}