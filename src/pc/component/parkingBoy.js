import React, {Component} from 'react';

import {Table, Divider} from 'antd';
import {connect} from "react-redux";
import ParkingBoyHead from "./parkingBoyItem/parkingBoyHead";
import ShuttleBox from "./parkingBoyItem/shuttleBox";
import parkingBoyApi from "../api/parkingBoyApi";
import employeeApi from "../api/employeeAPI";


class parkingBoy extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        parkingBoyApi.initBoyList(this.props.dispatch);
    }

    handleFrozen=(id)=>{
        // console.log("handleFrozen")
        // console.log(id)
        let updateParkingBoyCallBack= ()=>parkingBoyApi.initBoyList(this.props.dispatch);
        employeeApi.forzenEmployee(id,this.props.dispatch,updateParkingBoyCallBack)
    }

    render() {
        const data = this.props.data;
        console.log(data)

        const columns = [
            {title: 'Id', dataIndex: 'id', key: 'id'},
            {title: '姓名', dataIndex: 'userName', key: 'userName'},
            {title: '电话号码', dataIndex: 'phone', key: 'phone'},
            {title: '邮箱', dataIndex: 'email', key: 'email'},
            {title: '状态', dataIndex: 'status', key: 'status'},
            {
                title: '操作', dataIndex: '', key: 'x', render: (text, record) => (

                    <span>
                        {/*<a href="javascript:;">修改</a>|*/}
                  <a href="javascript:;" onClick={()=>this.handleFrozen(record.id)}>{record.loginFlag == 0?"激活":"冻结"}</a>

                </span>
                ),
            },
        ];

        // const data = [
        //     { key: 1, Id: 'John Brown', name: 32, phoneNumber: 'New York No. 1 Lake Park',mail:"12144@qq",statusCode:"上班" },
        //     { key: 2, Id: 'Jim Green', name: 42, phoneNumber: 'London No. 1 Lake Park',mail:"12144@qq",statusCode:"上班"},
        //     { key: 3, Id: 'Joe Black', name: 32, phoneNumber: 'Sidney No. 1 Lake Park',mail:"12144@qq",statusCode:"上班"},
        // ];
        return (<div>
            <ParkingBoyHead searchParkingBoy={this.props.searchParkingBoy}/>
            <Table
                columns={columns}
                expandedRowRender={(record) => <ShuttleBox    id={record.id}/>}
                dataSource={data}
                bordered
                footer={() => `总计：${data !== undefined ? data.length : ''}`}
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
    return {
        dispatch: dispatch,
        searchParkingBoy: (searchType, keyword) => {
            parkingBoyApi.searchParkingBoyBy(searchType, keyword,
                (parkingBoys) => {
                    console.log(JSON.stringify(parkingBoys))
                    dispatch({type: 'RELOAD_TABLE_DATA', value: parkingBoys});
                })
        }
    };
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(parkingBoy);