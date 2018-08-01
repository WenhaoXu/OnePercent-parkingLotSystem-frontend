import React from 'react';
import { Button,Modal} from 'antd';
import Employee_table from './employee_table';
import Employee_headerContainer from '../container/employee_headerContainer';
import Register from './register';
  
class Employee extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleOk=()=>{
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap(false,true);
    setTimeout(() => {
      changeStatusfromMap(false,false);
    }, 3000);
    
  }

  handleCancel=()=>{
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap(false,false);
  }

  render() {
    return (
        <div>
        <Employee_headerContainer/>
        <Employee_table/>
        <Modal
          visible={this.props.visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <Register />
        </Modal>
  </div>
    );
  }
}

export default Employee;
