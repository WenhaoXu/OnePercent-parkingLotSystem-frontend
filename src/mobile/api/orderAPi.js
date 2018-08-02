import React from 'react';
import {scrambleOrderTurnToAccess,getOrderList1} from "../action";

export const scrambleOrder1=(orderId,dispatch)=>{
    console.log("调用API处理抢单");
        fetch(`http://localhost:1234/orders/${orderId}?operation=robOrder&coordinatorId=1`, {
            method: 'PATCH',
            headers:
                {'Authorization':localStorage.getItem("token")}
        })
            .then(response => response.json())
            .then(json => {
                const order = json;
                console.log(order);
                fetch(`http://localhost:1234/orders/pending`, {
                    method: 'GET',
                    headers:
                        {'Authorization':localStorage.getItem("token")}
                })
                    .then(response => response.json())
                    .then(json => {
                        const orderList = json;
                        console.log("调用API获取Order列表");
                        console.log(orderList);
                        dispatch(scrambleOrderTurnToAccess(orderList));
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

    fetch(`http://localhost:1234/orders/pending`, {
        method: 'GET',
        headers:
            {'Authorization':localStorage.getItem("token")}
    })
        .then(response => response.json())
        .then(json => {
            const orderList = json;
            console.log("调用API获取Order列表");
            console.log(orderList);
            dispatch(getOrderList1(orderList));
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)
        });
}

