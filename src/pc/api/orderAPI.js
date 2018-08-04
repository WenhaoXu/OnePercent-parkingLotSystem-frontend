import {getAllOrder} from "../action/index";
import Order from "../model/Order";
function formatOrderList(orderList) {
    let formatOrderList=[];
    for(let order of  orderList)
    {   let status="存取中";
        let type="取车";
        let action="";
        if (order.status=="accepted"||order.status=="pending") {
            type="存车";
        }
        if (order.status=="waitingToRetrieve"||order.status=="pending"){
            status="无人处理";
            action="指派";
        }
        formatOrderList.push(new Order(order.id,order.carNo,type,status,action));
    }
    return formatOrderList;

}
export const getOrderList=(dispatch)=>{
    let token = localStorage.getItem("token");
    fetch(`http://localhost:1234/orders`, {
        method: 'GET',
        headers:
            {'Authorization':token}
    })
        .then(response => response.json())
        .then(json => {
            let orderList = json;
            dispatch(getAllOrder(formatOrderList(orderList)));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}


export const searchOrder=(type,content,dispatch)=>{
    let token = localStorage.getItem("token");
    fetch(`http://localhost:1234/orders`, {
        method: 'GET',
        headers:
            {'Authorization':token}
    })
        .then(response => response.json())
        .then(json => {
            let orderList = json;
            dispatch(getAllOrder(formatOrderList(orderList)));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}