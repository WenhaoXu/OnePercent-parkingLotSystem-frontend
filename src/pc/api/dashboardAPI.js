import axios from 'axios';
import globalConfig from '../../conf';

const remoteHost = globalConfig.domain + '/';
const token = localStorage.getItem("token");

export default {

    loadParkingLots: successCallback =>{
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