import React from 'react';
import  {Table,Divider,Popconfirm ,message} from 'antd';
import './employee.css';

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
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
class Employee_table extends React.Component {

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
          <a href="javascript:;">修改</a>
          <Divider type="vertical" />
          
          <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
          <a href="javascript:;" >冻结</a>
          </Popconfirm>
          
          <Divider type="vertical" />
        </span>
      )}
    />
  </Table>
    );
  }
}

export default Employee_table;