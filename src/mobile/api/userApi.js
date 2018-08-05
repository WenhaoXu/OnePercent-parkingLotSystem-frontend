import axios from 'axios';
import globalConf from '../../conf';
import 'whatwg-fetch'
import {message} from "antd/lib/index";

const remoteHost = globalConf.domain;

export default {

    getCurrentAccountInfo: (successCallback) => {
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        axios({
            url: remoteHost + '/' + 'users/currentAccountInfo',
            method: 'get',
            headers: {'Authorization': parse.token}
        }).then(response => {
            successCallback(response.data)
        });
    },

    startWork: () => {
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        // console.log(remoteHost)
        // console.log(parse)
        fetch(`${remoteHost}/users/${parse.userId}/work?status=1`, {
            method: 'PATCH',
            headers: {'Authorization': parse.token},
        })
            .then(value => value.text())
            .then(value => {
                if (value === 'true') {
                    message.success('打卡成功');
                }
            })
    }
}




