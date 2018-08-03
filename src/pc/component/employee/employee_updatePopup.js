import React, { Component } from 'react';
import {Button,Modal} from 'antd'
import './employee.css';
import Employee_updateContainer from '../../container/employee_updateContainer'

class Employee_updatePopup extends Component {

  constructor(props){
    super(props);
  }
  
  handleOk=()=>{
    const changeUpdateStatusfromMap = this.props.changeUpdateStatusfromMap;
      changeUpdateStatusfromMap(false);

  }

  handleCancel=()=>{
    const changeUpdateStatusfromMap = this.props.changeUpdateStatusfromMap;
      changeUpdateStatusfromMap(false);
  }

  render() {
    return ( 
        <Modal
          visible={this.props.updatePopupVisible}
          title="修改用户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button id="return" key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          <Employee_updateContainer />
        </Modal>
    );
  }
}

export default Employee_updatePopup;
