import React from 'react';
import {scrambleOrderTurnToAccess,getOrderList1} from "../action";
import conf from "./conf";
import {Toast} from "antd-mobile";

function success() {
    Toast.success('抢单成功', 1);
}

function fail() {
    Toast.fail('抢单失败', 1);
}
export const scrambleOrder1=(orderId,dispatch)=>{

    let item = localStorage.getItem("token");
    let parse = JSON.parse(item);
    fetch(`${conf.domain}/orders/${orderId}?operation=robOrder&coordinatorId=${parse.userId}`, {
            method: 'PATCH',
            headers:
                {'Authorization': parse.token}
        })
            .then(response=> {
                if (response.status==403){
                    fail();
                }else{
                    const order = response.json();
                    fetch(`${conf.domain}/orders/pending`, {
                        method: 'GET',
                        headers:
                            {'Authorization':parse.token}
                    })
                        .then(response => response.json())
                        .then(json => {
                            const orderList = json;
                            success();
                            dispatch(scrambleOrderTurnToAccess(orderList));
                            // history.push("/parkAndTake")
                            // // window.location.href="/parkAndTake";
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

