import conf from "./conf";
import globalConf from '../../conf';
import axios from 'axios';

const remoteHost = globalConf.domain + '/';
const token = localStorage.getItem("token");

export default {
    initBoyList: (dispatch) => {
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/users`, {

            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then(response => response.json())
            .then(json => {
                json = json.filter(item => item.roles[0].name === "ParkingBoy");

                json = json.map(item => {
                    let newItem = {};
                    newItem.id = item.id;
                    newItem.userName = item.userName;
                    newItem.phone = item.phone;
                    newItem.email = item.email;
                    newItem.status = "上班"
                    return newItem;
                })
                console.log(json)
                dispatch({
                    type: "INITParkingBoyDATA",
                    payload: json
                })
            })
    },

    searchParkingBoyBy: (searchType, keyword, successCallback) => {
        let user = {};
        user[searchType] = keyword ? keyword : null;
        console.log(JSON.stringify(user));
        axios({
            url: remoteHost + 'users/parkingBoys',
            method: 'get',
            headers: {Authorization: token},
            params: user
        }).then(response => {
            successCallback(response.data);
        });
    }


}