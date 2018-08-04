import axios from 'axios';
import globalConf from '../../conf';

const remoteHost = globalConf.domain;
let token = localStorage.getItem("token");

export default {

    getCurrentAccountInfo: (successCallback) => {
        axios({
            url: remoteHost + '/' + 'users/currentAccountInfo',
            method: 'get',
            headers: {'authorization': token}
        }).then(response => {successCallback(response.data)});
    }
}




