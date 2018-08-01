import React, { Component } from 'react';
import {Button,Modal} from 'antd'
import './employee.css';
import Employee_addContainer from '../../container/employee_addContainer'
import Employee from '../../model/Employee';

class Employee_updatePopup extends Component {

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
          title="修改用户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button id="return" key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <Employee_addContainer />
        </Modal>
    );
  }
}

export default Employee_updatePopup;
