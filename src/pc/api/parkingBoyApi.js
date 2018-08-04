import conf from "./conf";
import {getAllUseableParkingBoy} from "../action";


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

    }
}


export const getUseableParkingBoy=(dispatch)=>{
    let token = localStorage.getItem("token");
    fetch(`http://localhost:1234/users`, {
        method: 'GET',
        headers:
            {'Authorization':token}
    })
        .then(response => response.json())
        .then(json => {
            //获取parkingBoy
            console.log(json);
            // json= json.filter(item=>item.roles[0].name==="ParkingBoy");
            let parkingBoyList = json;
            dispatch(getAllUseableParkingBoy(parkingBoyList));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}