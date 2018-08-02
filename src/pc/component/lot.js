import {Button, Checkbox, Divider, Input, Popover, Select, Table} from 'antd';
import React from 'react';
import './lot.css'
import AddLot from "./addLot";
import UpdateLot from "./updateLot";
import lotApi from "../api/lot";


import uuidv4 from 'uuid/v4'
const data = [{
    key: '1',
    id: 'John Brown',
    name: 32,
    size: 'New York No. 1 Lake Park',
}, {
    key: '2',
    id: 'Joe Black',
    name: 42,
    size: 'London No. 1 Lake Park',
}, {
    key: '3',
    id: 'Jim Green',
    name: 32,
    size: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    id: 'Jim Red',
    name: 32,
    size: 'London No. 2 Lake Park',
}];

class Lot extends React.Component {


    componentWillMount() {
        lotApi.initState(this.props.dispatch)
    }

    state = {
        groupSearchSwitch: false,
        groupSearchPopSwitch: false,
        conditions: []
    };

    onChange = () => {
        this.setState({
            groupSearchSwitch: !this.state.groupSearchSwitch,
            groupSearchPopSwitch: false
        })
    };

    handleSearchClick = () => {
        if (this.state.groupSearchSwitch) {
            this.setState({
                groupSearchSwitch: true,
                groupSearchPopSwitch: true
            })
        } else {

        }
    };

    handleDisableUser = (dispatch,id) => {
        lotApi.update(dispatch,id, null, null, null, false)
    };

    render() {
        const columns = [{
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '大小',
            dataIndex: 'totalSize',
            key: 'totalSize',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                  {/*<a href="javascript:;" onClick={this.handleUpdate}>修改</a>*/}

                    <span> <UpdateLot record={record}/></span>
                  <Divider type="vertical"/>
                  <a href="javascript:;" onClick={() => this.handleDisableUser(this.props.dispatch,record.id)}>{record.available?'开启':'注销'}</a>
                  <Divider type="vertical"/>
                </span>
            ),
        }];


        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        const text = <span>组合条件</span>;

        const content = (
            <div>
                {this.state.conditions.map((value, index) => <p key={index}>{value}</p>)}
            </div>
        );

        return (
            <div>
                <div className="head">
                    <span id="addlot"><AddLot/></span>
                    <div>
                        <Select defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
                            <Option value="jack">电话号码</Option>
                            <Option value="lucy">名字</Option>
                            <Option value="disabled">容量</Option>
                        </Select>
                        <Input placeholder=""/>
                        <Popover placement="bottomRight" title={text} content={content} trigger="none"
                                 visible={this.state.groupSearchPopSwitch} onClick={this.handleSearchClick}>
                            <Button type={'primary'}>搜索</Button>
                        </Popover>
                        <div id={'group-search'}>
                            <Checkbox onChange={this.onChange}>组合搜索</Checkbox>
                        </div>
                    </div>
                </div>
                <Table columns={columns} dataSource={this.props.dataSource}/>
            </div>
        );
    }
}

export default Lot;