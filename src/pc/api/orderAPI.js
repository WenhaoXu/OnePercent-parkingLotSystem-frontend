import {getAllOrder} from "../action/index";
import Order from "../model/Order";

export const getOrderList=(dispatch)=>{
    let item = localStorage.getItem("token");
    console.log(item);
    let parse = JSON.parse(item);
    fetch(`http://localhost:1234/orders`, {
        method: 'GET',
        headers:
            {'Authorization':parse.token}
    })
        .then(response => response.json())
        .then(json => {
            const orderList = json;
            const formatOrderList=[];
            for(let order of  orderList)
            {   let status="存取中";
                let type="取车";
                if (order.status=="retrieving"||order.status=="waitingToRetrieve") {
                    type="存车";
                }
                if (order.status=="waitingToRetrieve"||order.status=="pending"){
                    status="无人处理";
                }
                formatOrderList.push(new Order(order.id,order.carNo,type,status));
            }
            dispatch(getAllOrder(formatOrderList));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}