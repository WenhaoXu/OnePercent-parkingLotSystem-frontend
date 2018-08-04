import conf from "./conf";


export default {
    initBoyList :(dispatch)=>{
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/users`, {

            method: 'GET',
            headers: {
                'Authorization': token
            },
        }). then(response => response.json())
            .then(json => {
               json= json.filter(item=>item.roles[0].name==="ParkingBoy");

               json=   json.map(item=>{
                   let newItem={};
                   newItem.id=item.id;
                   newItem.userName=item.userName;
                   newItem.phone=item.phone;
                   newItem.email=item.email;
                   newItem.status="上班"
                   return newItem;
               })
                console.log(json)
                dispatch({
                    type: "INITParkingBoyDATA",
                    payload: json
                })
            })

    },



    initLotList:(dispatch,id)=>{
        let token = localStorage.getItem("token");
        fetch(`${conf.domain}/parkinglots?findAll=true`, {

            method: 'GET',
            headers: {
                'Authorization': token
            },
        }). then(response => response.json())
            .then(json => {
                json= json.filter(item=>item.roles[0].name==="ParkingBoy");

                json=   json.map(item=>{
                    let newItem={};
                    newItem.id=item.id;
                    newItem.userName=item.userName;
                    newItem.phone=item.phone;
                    newItem.email=item.email;
                    newItem.status="上班"
                    return newItem;
                })
                console.log(json)
                dispatch({
                    type: "INITParkingBoyDATA",
                    payload: json
                })
            })

    }



}