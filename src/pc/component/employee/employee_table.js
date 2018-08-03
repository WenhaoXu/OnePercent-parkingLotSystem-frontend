import React from 'react';
import  {Table,Divider,Popconfirm ,message} from 'antd';
import './employee.css';
import Employee_addPopupContainer from '../../container/employee_addPopupContainer'
import Employee_updatePopupContainer from '../../container/employee_updatePopupContainer'
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

  showUpdateModal=()=>{
    const changeUpdateStatusfromMap = this.props.changeUpdateStatusfromMap;
      changeUpdateStatusfromMap(true);
  }
  frozen=(id)=>{
    const forzenEmployeefromMap = this.props.forzenEmployeefromMap;
    forzenEmployeefromMap(id);
  }

  render() {
    const data = this.props.employeeList;
    return (
      <div>
        <Table dataSource={data} rowKey="id">
          <Column
              title="id"
              dataIndex="id"
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
                <a onClick={this.showUpdateModal}>修改</a>
                <Divider type="vertical" />
                
                <Popconfirm title="确定冻结此用户？" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <a onClick={()=>this.frozen(record.id)}>{record.loginFlag}</a>
                </Popconfirm>
                
                <Divider type="vertical" />
              </span>
            )}
          />
        
        </Table>
        <Employee_addPopupContainer/>
        <Employee_updatePopupContainer/>
        </div>
    );
  }
}

export default Employee_table;