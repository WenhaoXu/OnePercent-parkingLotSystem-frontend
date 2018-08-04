import React from 'react';
import  {Table} from 'antd';
import OrderHeader from "../../container/order/orderHeaderContainer";
import ParkingBoyTablePopupContainer from "../../container/order/parkingBoyTablePopupContainer"

const { Column} = Table;
export default  class OrderTable extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.onComponentDidMount()
    }

    assignOrder=(record)=>{

        //修改弹出框的显示属性
        this.props.changePopup(record);
        console.log(this.props.assignPopupVisible);

    }

    render(){
        const data = this.props.orderList;
        return(
            <div>
                <OrderHeader/>
                <Table  dataSource={data} rowKey="id">
                    <Column
                        title="id"
                        dataIndex="id"
                        key="id"
                    />
                    <Column
                        title="车牌号"
                        dataIndex="carNo"
                        key="carNo"
                    />

                    <Column
                        title="类型"
                        dataIndex="type"
                        key="type"
                    />
                    <Column
                        title="状态"
                        dataIndex="status"
                        key="status"
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => {
                            return(
                            <span>
                                <a onClick={()=>this.assignOrder(record)}>{record.action!=""?"指派":""} </a>
                            </span>

                        )
                        }}
                    />
                </Table>
                <ParkingBoyTablePopupContainer/>
            </div>
        );
    }

}