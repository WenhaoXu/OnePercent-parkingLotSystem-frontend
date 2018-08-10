import 'whatwg-fetch'
import conf from './conf'
import {message} from 'antd';
import axios from 'axios';

export default {

    initState: (dispatch) => {

        let token = localStorage.getItem("token");
        let page = 1;
        let size = 100;


        const myHeaders = new Headers();
        myHeaders.append('Authorization', token);

        fetch(`${conf.domain}/parkinglots?page=${page}&size=${size}`, {
            method: 'GET',
            headers: myHeaders,
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                dispatch({
                    type: "INIT",
                    payload: json
                })
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    },

    add: (dispatch, name, size) => {
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify({
                name: name,
                totalSize: size,
            })
        }).then(value => {
            value.text().then(value1 => {

                axios({
                    url: `${conf.domain}/parkinglots`,
                    method: 'get',
                    headers: {authorization: token},
                    params: {findAll: 'true'}
                }).then(response => {console.log(JSON.stringify(response.data)); dispatch({type: 'INIT', payload: response.data})})
                console.log(value1)
            })
        })
    },

    update: (dispatch, id, name, totalSize, spareSize, available, updateCallBack) => {

        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
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
                value.text().then(value1 => {
                    message.success("操作成功！")
                    if (value1.indexOf('停车场不是') > 0) {
                        message.error(value1);
                    }else if (value1.indexOf("移除停车员")>0) {
                        message.error(value1);
                    }else {

                    }
                })
                if (updateCallBack != null || updateCallBack !== undefined) {
                    updateCallBack()
                }
            })
            .catch(reason => {
                // console.log(reason)
            })
    },

    searchBy: (field, condition,dispatch) => {

        let token = localStorage.getItem("token");
        let page = 1;
        let size = 10;

        let param;
        if (field === "1"){
            param=`&name=${condition}`
        }else if (field === "2") {
            param=`&greaterThanEqual=${condition}`
        }else if (field ==="3") {
            param=`&lessThanEqual=${condition}`
        }else {
            param=`&phoneNumber=${condition}`
        }


        const myHeaders = new Headers();
        myHeaders.append('Authorization', token);

        fetch(`${conf.domain}/parkinglots?page=${page}&size=${size}${param}`, {
            method: 'GET',
            headers: myHeaders,
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                dispatch({
                    type: "INIT",
                    payload: json
                })
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }

}