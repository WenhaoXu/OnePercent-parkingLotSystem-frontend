import React from 'react';
import {scrambleOrderTurnToAccess,getOrderList1} from "../action";
import conf from "./conf";


export const scrambleOrder1=(orderId,dispatch)=>{

    let item = localStorage.getItem("token");
    let parse = JSON.parse(item);
    fetch(`${conf.domain}/orders/${orderId}?operation=robOrder&coordinatorId=1`, {
            method: 'PATCH',
            headers:
                {'Authorization': parse.token}
        })
            .then(response=> {
                if (response.status==403){
                    alert("抢单失败");
                }
                const order = response.json();
                console.log(order);
                fetch(`${conf.domain}/orders/pending`, {
                    method: 'GET',
                    headers:
                        {'Authorization':parse.token}
                })
                    .then(response => response.json())
                    .then(json => {
                        const orderList = json;
                        console.log("调用API获取Order列表");
                        console.log(orderList);
                        dispatch(scrambleOrderTurnToAccess(orderList));
                        // history.push("/parkAndTake")
                        // // window.location.href="/parkAndTake";
                    })
                    .catch(function (ex) {
                        console.log('parsing failed', ex)
                    });
            })
            .catch(function (ex) {
                console.log('parsing failed', ex)
            });
}

export const getOrderList=(dispatch)=>{
    let item = localStorage.getItem("token");
    let parse = JSON.parse(item);
    fetch(`${conf.domain}/orders/pending`, {
        method: 'GET',
        headers:
            {'Authorization':parse.token}
    })
        .then(response => response.json())
        .then(json => {
            const orderList = json;
            dispatch(getOrderList1(orderList));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}

