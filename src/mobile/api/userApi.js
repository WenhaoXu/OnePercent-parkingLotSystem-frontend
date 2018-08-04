import axios from 'axios';
import globalConf from '../../conf';

const remoteHost = globalConf.domain;
let item = localStorage.getItem("token");
let parse = JSON.parse(item);


export default {

    getCurrentAccountInfo: (successCallback) => {
        axios({
            url: remoteHost + '/' + 'users/currentAccountInfo',
            method: 'get',
            headers: {'authorization': parse.token}
        }).then(response => {successCallback(response.data)});
    }
}




