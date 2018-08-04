import conf from "./conf";


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


    initLotList: (dispatch, id) => {
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots?findAll=true`, {

            method: 'GET',
            headers: {
                'Authorization': token
            },
        }).then(response => response.json())
            .then(json => {
                let boyLots=[...json];
                json = json.filter(item => item.coordinator === null && item.available === true);
                 console.log(boyLots)
                let unparkList = json.map(item => {
                    let newItem = {};
                    newItem.id = item.id;
                    newItem.name = item.name;
                    newItem.totalSize = item.totalSize;
                    return newItem;
                })
                console.log(unparkList)
                let boyParkingLots = boyLots.filter(item =>item.coordinator!=null&& item.coordinator.id ===id).map(item => {
                            let newItem = {};
                            newItem.id = item.id;
                            newItem.name = item.name;
                            newItem.totalSize = item.totalSize;
                            return newItem;
                        })
                        console.log(boyParkingLots)
                        dispatch({
                            type: "INITUnManageLotDATA",
                            payload: {
                                mockData: unparkList,
                                targetKeys: boyParkingLots
                            },
                        })
            })

    }


}