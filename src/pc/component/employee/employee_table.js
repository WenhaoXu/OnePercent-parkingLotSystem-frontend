import React from 'react';
import  {Table,Divider,Popconfirm ,message} from 'antd';
import './employee.css';
import Employee_popupContainer from '../../container/employee_popupContainer'
const { Column} = Table;
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  
class Employee_table extends React.Component {
  constructor(props){
    super(props);
  }

  showModal=()=>{
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap(true,false);
  }

  render() {
    const data = this.props.employeeList;
    return (
      <div>
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
                <a onClick={this.showModal}>修改</a>
                <Divider type="vertical" />
                
                <Popconfirm title="确定冻结此用户？" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <a href="javascript:;" >冻结</a>
                </Popconfirm>
                
                <Divider type="vertical" />
              </span>
            )}
          />
        
        </Table>
        <Employee_popupContainer/>
        </div>
    );
  }
}

export default Employee_table;