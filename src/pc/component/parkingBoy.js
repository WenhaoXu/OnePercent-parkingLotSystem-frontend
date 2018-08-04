import React, {Component} from 'react';

import { Table ,Divider} from 'antd';
import {connect} from "react-redux";
import  ParkingBoyHead from "./parkingBoyItem/parkingBoyHead";
import  ShuttleBox from "./parkingBoyItem/shuttleBox";
import parkingBoyApi from "../api/parkingBoyApi";
 class parkingBoy extends Component{
     constructor(props) {
         super(props);
     }
     componentWillMount(){
         parkingBoyApi.initBoyList(this.props.dispatch);
     }


     render(){
       const data=this.props.data;
         console.log(data)

        const columns = [
            { title: 'Id', dataIndex: 'id', key: 'id' },
            { title: '姓名', dataIndex: 'userName', key: 'userName' },
             { title: '电话号码', dataIndex: 'phone', key: 'phone' },
             {title: '邮箱', dataIndex: 'email', key: 'email' },
             {title: '状态', dataIndex: 'status', key: 'status' },
             { title: '操作', dataIndex: '', key: 'x', render: (text, record) => (
                     <span>
                         <a href="javascript:;"  className={record.id}>冻结</a>
                      </span>
                 ), },
        ];

        return(<div>
            <ParkingBoyHead/>
            <Table
                columns={columns}
                expandedRowRender={record => <ShuttleBox id={record.id}/>}
                dataSource={data}
                bordered
                footer={() => `总计：${data!==undefined?data.length:''}` }
            />
        </div>);
    }
}
function mapStateToProps(state) {
    return {
        data: state.parkingBoy.dataSource
    };
}
function  mapDispatchToProps(dispatch) {
    return{dispatch};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(parkingBoy);