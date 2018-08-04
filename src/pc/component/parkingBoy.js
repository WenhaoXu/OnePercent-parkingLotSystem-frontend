import React, {Component} from 'react';

import { Table ,Divider} from 'antd';
import {connect} from "react-redux";
import  ParkingBoyHead from "./parkingBoyItem/parkingBoyHead";
import  ShuttleBox from "./parkingBoyItem/shuttleBox";
 class parkingBoy extends Component{

    render(){
        const columns = [
            { title: 'Id', dataIndex: 'Id', key: 'Id' },
            { title: '姓名', dataIndex: 'name', key: 'name' },
             { title: '电话号码', dataIndex: 'phoneNumber', key: 'phoneNumber' },
             {title: '邮箱', dataIndex: 'mail', key: 'mail' },
             {title: '状态', dataIndex: 'status', key: 'status' },
             { title: '操作', dataIndex: '', key: 'x', render: (text, record) => (
                     <span>
                        <a href="javascript:;">修改</a>|
                  <a href="javascript:;">删除</a>

                </span>
                 ), },
        ];

        const data = [
            { key: 1, Id: 'John Brown', name: 32, phoneNumber: 'New York No. 1 Lake Park',mail:"12144@qq",status:"上班" },
            { key: 2, Id: 'Jim Green', name: 42, phoneNumber: 'London No. 1 Lake Park',mail:"12144@qq",status:"上班"},
            { key: 3, Id: 'Joe Black', name: 32, phoneNumber: 'Sidney No. 1 Lake Park',mail:"12144@qq",status:"上班"},
        ];
        return(<div>
            <ParkingBoyHead/>
            <Table
                columns={columns}
                expandedRowRender={() => <ShuttleBox/>}
                dataSource={data}
                bordered
                footer={() => '总计：32'}
            />
        </div>);
    }
}
function mapStateToProps(state) {
    return {};
}
function  mapDispatchToProps(dispatch) {
    return{};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(parkingBoy);