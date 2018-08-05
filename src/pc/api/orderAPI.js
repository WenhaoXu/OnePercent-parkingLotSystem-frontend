import {getAllOrder,assignOrder1} from "../action/index";
import Order from "../model/Order";
import {Modal,Button } from 'antd'
import globalConfig from "../../conf";
const remoteHost = globalConfig.domain;
function formatOrderList(orderList) {
    let formatOrderList=[];
    for(let order of  orderList)
    {   let status="存取中";
        let type="取车";
        let action="";
        if (order.status=="accepted"||order.status=="pending") {
            type="存车";
        }
        if (type=="存车"&&order.status=="waitingToRetrieve"||order.status=="pending"){
            status="无人处理";
        }
        if(type=="存车"&&status=="无人处理"){
            action="指派";
        }
        formatOrderList.push(new Order(order.id,order.carNo,type,status,action));
    }
    return formatOrderList;

}

function success() {
    const modal = Modal.success({
        title: '派单成功',
        content: '单子会被尽快处理',
        cancelText:''
    });
    // setTimeout(() => modal.destroy(), 1000);
}

function fail() {
    const modal = Modal.error({
        title: '派单失败',
        content: '指派停车员的停车场已满或该订单已被停车员抢单',
    });
    // setTimeout(() => modal.destroy(), 1000);
}

function warning() {
    const modal = Modal.warning({
        title: '派单失败',
        content: '请选择停车员',
        cancelText:''
    });
    // setTimeout(() => modal.destroy(), 1000);
}

export const getOrderList=(dispatch)=>{
    let token = localStorage.getItem("token");
    fetch(`${remoteHost}/orders`, {
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
    //查询id和carNo
    fetch(`${remoteHost}/orders?${type}=${content}`, {
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

export const assignOrder=(order,parkingBoy,dispatch) =>{
    let token = localStorage.getItem("token");
    fetch(`${remoteHost}/orders/${order.id}?operation=robOrder&coordinatorId=${parkingBoy.id}`, {
        method: 'PATCH',
        headers:
            {'Authorization':token}
    })
        .then(response=> {
            if (response.status==400){
                warning();
            }
            else if (response.status==403){
                fail();
            }else {
                    fetch(`${remoteHost}/orders`, {
                        method: 'GET',
                        headers:
                            {'Authorization':token}
                    })
                        .then(response => response.json())
                        .then(json => {
                            const orderList = json;
                            success();
                            dispatch(assignOrder1(formatOrderList(orderList)));
                        })
                        .catch(function (ex) {
                            console.log('parsing failed', ex)
                        });
            }

        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });


}