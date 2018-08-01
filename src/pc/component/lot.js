import {Button, Checkbox, Divider, Input, Select, Table, Modal, Form} from 'antd';
import React from 'react';
import './lot.css'
import AddLot from "./addLot";


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
            dataIndex: 'size',
            key: 'size',
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                  <a href="javascript:;">修改</a>
                  <Divider type="vertical"/>
                  <a href="javascript:;">注销</a>
                  <Divider type="vertical"/>
                </span>
            ),
        }];


        const Option = Select.Option;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function onChange() {

        }
        return (

            <div>
                <div className="head">
                    <span id="addlot"><AddLot/></span>
                    <div>
                        <Select defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                        <Input placeholder="Basic usage"/>
                        <Button type={'primary'}>搜索</Button>
                        <div id={'group-search'}>
                            <Checkbox onChange={onChange}>组合搜索</Checkbox>
                        </div>
                    </div>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default Lot;