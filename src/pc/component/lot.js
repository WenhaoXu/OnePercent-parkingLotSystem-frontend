import {Button, Checkbox, Divider, Input, Popover, Select, Table} from 'antd';
import React from 'react';
import './lot.css'
import AddLot from "./addLot";
import UpdateLot from "./updateLot";
import lotApi from "../api/lot";

class Lot extends React.Component {

    componentWillMount() {
        lotApi.initState(this.props.dispatch)
    }

    state = {
        groupSearchSwitch: false,
        groupSearchPopSwitch: false,
        conditions: []
    };

    searchField = "0";

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

    handleDisableUser = (dispatch, id, available) => {
        let updateCallBack = ()=>lotApi.initState(this.props.dispatch);
        lotApi.update(dispatch, id, null, null, null, available,updateCallBack )
    };

    handleSpecSearch = () => {
        // console.log(this.searchField)
        let dispatch = this.props.dispatch;
        let condition = this.refs.condition.input.value;
        lotApi.searchBy(this.searchField, condition, dispatch)
    }

    render() {
        let self = this;
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
                  <a href="javascript:;"
                     onClick={() => this.handleDisableUser(this.props.dispatch, record.id, !record.available)}>{record.available ? '开启' : '注销'}</a>
                  <Divider type="vertical"/>
                </span>
            ),
        }];


        const Option = Select.Option;

        function handleChange(value) {
            // console.log(`selected ${value}`);
            self.searchField = value;
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
                        <Select defaultValue="0" style={{width: 120}} onChange={handleChange}>
                            <Option value="0">电话号码</Option>
                            <Option value="1">名字</Option>
                            <Option value="2">容量&gt;=</Option>
                            <Option value="3">容量&lt;=</Option>
                        </Select>
                        <Input placeholder="" ref={"condition"}/>
                        <Popover placement="bottomRight" title={text} content={content} trigger="none"
                                 visible={this.state.groupSearchPopSwitch} onClick={this.handleSearchClick}>
                            <Button type={'primary'} onClick={this.handleSpecSearch}>搜索</Button>
                        </Popover>
                        {/*<div id={'group-search'}>*/}
                        {/*<Checkbox onChange={this.onChange}>组合搜索</Checkbox>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <Table columns={columns} dataSource={this.props.dataSource}/>
            </div>
        );
    }
}

export default Lot;