
export const getHistoryListMap=(historyList)=>({type:'getHistoryList',historyList})
export const scrambleOrderTurnToAccess=(orderList)=>({type:'scrambleOrder',orderList})
export const getOrderList1=(orderList)=>{
    return { type: 'getOrderList', orderList }
}
