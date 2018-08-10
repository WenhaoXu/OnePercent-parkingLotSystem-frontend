import {getHistoryListMap} from '../action/index'
import 'whatwg-fetch'
import globalConfig from '../../conf';

const remoteHost = globalConfig.domain;

const historyAPI = {
    employeeList:[],
    getHistoryList(dispatch) {
        fetch(`${remoteHost}/users`, {
            method: 'GET',
            headers:
                {'Authorization':localStorage.getItem("token")}
        })
            .then(response => response.json())
            .then(json => {
                const employeeList = json;
                // console.log(employeeList);
                dispatch(getHistoryListMap(employeeList));
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            });
    }


};
export default historyAPI;