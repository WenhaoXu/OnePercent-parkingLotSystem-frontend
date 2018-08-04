import React, {Component} from 'react';

import {Table, Divider} from 'antd';
import {connect} from "react-redux";
import ParkingBoyHead from "./parkingBoyItem/parkingBoyHead";
import ShuttleBox from "./parkingBoyItem/shuttleBox";
import parkingBoyApi from "../api/parkingBoyApi";

class parkingBoy extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        parkingBoyApi.initBoyList(this.props.dispatch);
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
                        <a href="javascript:;">修改</a>|
                  <a href="javascript:;" onClick={()=>console.log(123)}>冻结</a>

                </span>
                ),
            },
        ];

        // const data = [
        //     { key: 1, Id: 'John Brown', name: 32, phoneNumber: 'New York No. 1 Lake Park',mail:"12144@qq",status:"上班" },
        //     { key: 2, Id: 'Jim Green', name: 42, phoneNumber: 'London No. 1 Lake Park',mail:"12144@qq",status:"上班"},
        //     { key: 3, Id: 'Joe Black', name: 32, phoneNumber: 'Sidney No. 1 Lake Park',mail:"12144@qq",status:"上班"},
        // ];
        return (<div>
            <ParkingBoyHead searchParkingBoy={this.props.searchParkingBoy}/>
            <Table
                columns={columns}
                expandedRowRender={() => <ShuttleBox/>}
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

function mapDispatchToProps(dispatch) {
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
    mapStateToProps, mapDispatchToProps
)(parkingBoy);