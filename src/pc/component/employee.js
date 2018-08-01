import React from 'react';
import { Table, Icon, Divider } from 'antd';
const { Column} = Table;
const data = [{
    key: '1',
    name: '张三',
    email: 'xxxx@qq.com',
    phone: 1377777777,
  }, {
    key: '2',
    name: '张三',
    email: 'xxxx@qq.com',
    phone: 1377777777,
  },{
    key: '3',
    name: '张三',
    email: 'xxxx@qq.com',
    phone: 1377777777,
  }];
  
class Employee extends React.Component {

  render() {
    return (
    <Table dataSource={data} rowKey="uid">
    <Column
        title="id"
        dataIndex="key"
        key="id"
    />
    <Column
        title="姓名"
        dataIndex="name"
        key="name"
    />
    
    <Column
      title="email"
      dataIndex="email"
      key="email"
    />
    <Column
      title="电话号码"
      dataIndex="phone"
      key="phone"
    />
    <Column
      title="操作"
      key="action"
      render={(text, record) => (
        <span>
          <a href="javascript:;">Action 一 {record.name}</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
          <Divider type="vertical" />
          <a href="javascript:;" className="ant-dropdown-link">
            More actions <Icon type="down" />
          </a>
        </span>
      )}
    />
  </Table>
    );
  }
}

export default Employee;
