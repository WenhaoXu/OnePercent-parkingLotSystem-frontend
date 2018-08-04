import axios from 'axios';
import globalConf from '../../conf';

const remoteHost = globalConf.domain;
let token = localStorage.getItem("token");

export default {

    getCurrentAccountInfo: (successCallback) => {
        let token = localStorage.getItem("token");
        let parse = JSON.parse(token);
        axios({
            url: remoteHost + '/' + 'users/currentAccountInfo',
            method: 'get',
            headers: {'Authorization': parse.token}
        }).then(response => {successCallback(response.data)});
    }
}




