import conf from "./conf";
import {getAllUseableParkingBoy} from "../action";
import axios from "axios/index";
import globalConfig from "../../conf";

const remoteHost = globalConfig.domain;

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
                json = json.filter(item => {
                        if (item.roles.length != 0) {
                            return item.roles[0].name === "ParkingBoy"
                        }
                        return false
                    }
                );
                var today = new Date(),
                    json = json.map(item => {
                        let newItem = {};
                        // 获取从今天0点开始到现在的时间
                        let todayTime = today.getTime() % (1000 * 60 * 60 * 24);
                        let dateTime, offset;
                        //获取要判断的日期和现在时间的偏差
                        newItem.status = "未打卡"
                        if (item.workTime != null) {
                            offset = item.workTime - today.getTime(),
                                //获取要判断日期距离今天0点有多久
                                dateTime = offset + todayTime;
                            if (dateTime > 0 || dateTime < 1000 * 60 * 60 * 9) {
                                newItem.status = "上班"
                            } else if (dateTime > 1000 * 60 * 60 * 9 && dateTime < 1000 * 60 * 60 * 17) {
                                newItem.status = "迟到"
                            }
                        }
                        newItem.id = item.id;
                        newItem.userName = item.userName;
                        newItem.phone = item.phone;
                        newItem.email = item.email;
                        newItem.loginFlag = item.loginFlag;
                        return newItem;
                    })
                console.log(json)
                dispatch({
                    type: "INITParkingBoyDATA",
                    payload: json
                })
            })

    },


    initLotList: (dispatch, id) => {
        localStorage.setItem("coordinator_id", id);
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots?findAll=true`, {

            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then(response => response.json())
            .then(json => {
                let boyLots = [...json];
                let tempkey = 1;
                json = json.filter(item => item.coordinator === null && item.available === true);
                console.log(boyLots)
                let unparkList = json.map(item => {
                    let newItem = {};
                    newItem.key = tempkey;
                    tempkey++;
                    newItem.id = item.id;
                    newItem.title = item.name + "/" + item.totalSize;
                    return newItem;
                })
                console.log(unparkList)
                let boyParkingLots = boyLots.filter(item => item.coordinator != null && item.coordinator.id == id).map(item => {
                    let newItem = {};
                    newItem.key = tempkey;
                    tempkey++;
                    newItem.id = item.id;
                    newItem.title = item.name + "/" + item.totalSize;
                    return newItem;
                })

                let mockdata = [...boyParkingLots, ...unparkList]
                console.log(mockdata);
                boyParkingLots = boyParkingLots.map(item => {
                    return item.key;
                })
                console.log("affagag" + boyParkingLots)
                dispatch({
                    type: "INITUnManageLotDATA",
                    payload: {
                        mockData: mockdata,
                        keys: boyParkingLots,
                        record: id,
                    },
                })
            })

    },
    change: (dispatch, targetKeys, mockData, direction, moveKeys, recordId) => {
        let tempdata = [...mockData];
        let token = localStorage.getItem("token");
        if (direction === "right") {

            let newitem = tempdata.filter(item => item.key == moveKeys);

            fetch(`${conf.domain}/parkinglots/${newitem[0].id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    coordinator: {id: recordId,}
                })
            }).then(response => response.text()).then(resp => {
                    dispatch({
                        type: "updateUnManageLotDATA",
                        payload: {
                            mockData: mockData,
                            keys: targetKeys,
                            record: recordId,
                        },
                    })
                }
            ).catch(

            )
        }
        else {
            let newitem = tempdata.filter(item => item.key == moveKeys);
            fetch(`${conf.domain}/parkinglots/${newitem[0].id}?setNull=true`, {
                method: 'put',
                headers: {
                    'Authorization': token
                },
            }).then(response => response.text()).then(resp => {
                    dispatch({
                        type: "updateUnManageLotDATA",
                        payload: {
                            mockData: mockData,
                            keys: targetKeys,
                            record: recordId,
                        },
                    })
                }
            ).catch(

            )

        }
    },

    searchParkingBoyBy: (searchType, keyword, successCallback) => {
        const token = localStorage.getItem("token");
        let user = {};
        user[searchType] = keyword;
        console.log(JSON.stringify(user));
        axios({
            url: remoteHost + '/users/parkingBoys',
            method: 'get',
            headers: {Authorization: token},
            params: user
        }).then(response => {
            console.log("got it")
            successCallback(response.data);
        });
    }


}


export const getUseableParkingBoy = (dispatch) => {
    let token = localStorage.getItem("token");
    fetch(`${remoteHost}/users`, {
        method: 'GET',
        headers:
            {'Authorization': token}
    })
        .then(response => response.json())
        .then(json => {
            json = json.filter(item => item.roles[0].name === "ParkingBoy" && item.loginFlag == "1");
            let parkingBoyList = json;
            dispatch(getAllUseableParkingBoy(parkingBoyList));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}


