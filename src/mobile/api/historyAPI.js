import {getHistoryListMap} from '../action/index'
import 'whatwg-fetch'

const historyAPI = {
    employeeList:[],
    getHistoryList(dispatch) {
        fetch(`https://parkinglotappofsystem.herokuapp.com/users`, {
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