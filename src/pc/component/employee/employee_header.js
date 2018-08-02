import React, { Component } from 'react';
import {Button,Select,Input} from 'antd'
import './employee.css';

const InputGroup = Input.Group;
const Option = Select.Option;

class Employee_header extends Component {

  constructor(props){
    super(props);
  }
  showModal=()=>{
    const changeStatusfromMap = this.props.changeStatusfromMap;
    changeStatusfromMap(true);
  }
  start(){
      console.log("1111");
  }
  render() {
    return ( 
        <div>
        <InputGroup compact >
        <Button
          type="primary"
          onClick={this.showModal}>
          新建
          </Button>
          
      </InputGroup>
      <div className="input">
        <Select defaultValue="name">
          <Option value="name">name</Option>
          <Option value="phone">phone</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="" />
        <Button
          type="primary"
          onClick={this.start}>
         搜索
          </Button>
        </div>
      </div>
    );
  }
}

export default Employee_header;
