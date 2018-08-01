import React from 'react';
import { Table, Divider ,Button,Select,Input,Popconfirm, message,Modal} from 'antd';
import './employee.css';
const { Column} = Table;
const InputGroup = Input.Group;
const Option = Select.Option;
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
  const state = {
    
  }
  const start=()=>{
      console.log("1111");
  }

  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }
  const showModal = () => {
    this.setState({
      visible: true,
    });
  }

  const handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  const handleCancel = () => {
    this.setState({ visible: false });
  }

  
class Employee extends React.Component {

  constructor(props){
    super(props);
}
  render() {
    return (
        <div >  
          <div>
          <InputGroup compact >
          <Button
            type="primary"
            onClick={showModal}>
            新建
            </Button>
            
        </InputGroup>
        <div className="input">
          <Select defaultValue="选项一">
            <Option value="name">name</Option>
            <Option value="phone">phone</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="" />
          <Button
            type="primary"
            onClick={start}>
           搜索
            </Button>
          </div>
        </div>
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
  <Modal
          visible={this.props.visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
  </div>
    );
  }
}

export default Employee;
