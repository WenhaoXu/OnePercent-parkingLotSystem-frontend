import React, { Component } from 'react';
import {Button,Modal} from 'antd'
import './employee.css';
import Employee_addContainer from '../../container/employee_addContainer'

class Employee_addPopup extends Component {

  constructor(props){
    super(props);
  }
  
  handleOk=()=>{
    const changeAddStatusfromMap = this.props.changeAddStatusfromMap;
    changeAddStatusfromMap(false);
  }

  handleCancel=()=>{
    const changeAddStatusfromMap = this.props.changeAddStatusfromMap;
    changeAddStatusfromMap(false);
  }

  render() {
    return ( 
        <Modal
          visible={this.props.addPopupVisible}
          title="新建用户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button id="return" key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <Employee_addContainer />
        </Modal>
    );
  }
}

export default Employee_addPopup;
