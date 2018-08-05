import axios from 'axios';
import globalConfig from '../../conf';

const remoteHost = globalConfig.domain + '/';

export default {

    loadParkingLots: successCallback =>{
        const token = localStorage.getItem("token");
        axios({
            url: remoteHost + 'parkinglots',
            method: 'get',
            headers: {authorization: token},
            params: {findAll: true}
        }).then(result => {
            successCallback(result.data);
        });
    }



}
