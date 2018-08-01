import React, { Component } from 'react';
import {Button,Modal} from 'antd'
import './employee.css';
import Register from '../register'

class Employee_popup extends Component {

  constructor(props){
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
        <Modal
          visible={this.props.visible}
          title="新建用户"
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
    );
  }
}

export default Employee_popup;
