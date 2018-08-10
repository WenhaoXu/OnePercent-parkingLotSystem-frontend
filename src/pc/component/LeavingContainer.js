import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Table, Button} from 'antd';
import axios from 'axios';
import globalConfig from '../../conf';
import {message} from "antd";

const remoteHost = globalConfig.domain;

class LeavingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    col = [
        {title: '单号', dataIndex: 'id', key: 'id'},
        {title: '姓名', dataIndex: 'name', key: 'name'},
        {title: '开始时间', dataIndex: 'startDate', key: 'startDate'},
        {title: '结束时间', dataIndex: 'endDate', key: 'endDate'},
        {title: '创建时间', dataIndex: 'createDate', key: 'createDate'},
        {title: '状态', dataIndex: 'status', key: 'status'},
        {
            title: '操作', dataIndex: 'operation', key: 'operation',
            render: (text, record) =>
                <span>
                    {/*<a onClick={this.onApprovalButtonClicked.bind(this, record.id, 'approval')}>批准</a> | <a*/}
                    {/*onClick={this.onApprovalButtonClicked.bind(this, record.id, 'rejected')}>拒绝</a>*/}
                        <Button type="primary" size={'small'} disabled={record.status === 'approval' || record.status === 'rejected' ? true : false}
                                onClick={this.onApprovalButtonClicked.bind(this, record.id, 'approval')}>批准</Button>|
                    <Button type="primary" size={'small'} disabled={record.status === 'approval' || record.status === 'rejected' ? true : false}
                            onClick={this.onApprovalButtonClicked.bind(this, record.id, 'rejected')}>拒绝</Button>
                </span>
        }
    ];

    formatDateTime = (datetime) => {
        let datetimeStr = `${datetime.getUTCFullYear()}-${datetime.getUTCMonth()}-${datetime.getUTCDay()}
        ${datetime.getUTCHours()}:${datetime.getUTCMinutes()}`
        console.log(datetimeStr)
        return datetimeStr;
    }

    formatItem = (item) => {
        let resultItem = {
            id: item.id,
            name: item.employee.name,
            startDate: this.formatDateTime(new Date(item.startDate)),
            endDate: this.formatDateTime(new Date(item.endDate)),
            createDate: this.formatDateTime(new Date(item.createDate)),
            status: item.status,
            reason: item.reason
        };
        return resultItem;
    }

    onApprovalButtonClicked = (leavingId, newStatus) => {
        axios({
            url: `${remoteHost}/leavings/${leavingId}`,
            method: 'patch',
            headers: {'Authorization': localStorage.getItem("token")},
            data: {status: newStatus}
        }).then(response => {
            this.state.targetArray = this.state.targetArray.map(item => item.id !== response.data.id ? item : this.formatItem(response.data));
            this.setState(this.state);
        })
    }

    componentWillMount() {
        axios({
            url: `${remoteHost}/leavings`,
            method: 'get',
            headers: {'Authorization': localStorage.getItem("token")}
        }).then(response => {
            this.state.allLeavings = response.data;
            let i = 1;
            let tartgetArray = this.state.allLeavings.map(item => this.formatItem(item));
            this.state.targetArray = tartgetArray;
            this.setState(this.state);
        });
    }

    render() {
        return (
            <div>

                <Table
                    columns={this.col}
                    dataSource={this.state.targetArray}
                    expandedRowRender={record => <p style={{margin: 0}}>{'请假理由：' + record.reason}</p>}
                />


            </div>
        )
    }
}

export default LeavingContainer;