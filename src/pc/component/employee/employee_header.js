import React, { Component } from 'react';
import {Button,Select,Input} from 'antd'
import './employee.css';

const InputGroup = Input.Group;
const Option = Select.Option;
var chooseMenu = "name";
var inputSelectValue = "";
class Employee_header extends Component {

  constructor(props){
    super(props);
  }
  showModal=()=>{
    const changeAddStatusfromMap = this.props.changeAddStatusfromMap;
    changeAddStatusfromMap(true);
  }
  submit=()=>{
      console.log("1111");
      const searchListfromMap = this.props.searchListfromMap;
      searchListfromMap(chooseMenu,inputSelectValue);
  }
    setChooseMenu=(e)=>{
        console.log(e);
        chooseMenu = e;
    }
    setInputValue=(e)=>{
        console.log(e.target.value);
        inputSelectValue = e.target.value;
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
      <div className="input" >
        <Select  defaultValue="name" onChange={this.setChooseMenu}>
            <Option value="id">ID</Option>
            <Option value="name">用户名</Option>
            <Option value="phone">电话</Option>
            <Option value="email">邮箱</Option>
            <Option value="userName">姓名</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="" onChange={this.setInputValue}/>
        <Button
          type="primary"
          onClick={this.submit}>
         搜索
          </Button>
        </div>
      </div>
    );
  }
}

export default Employee_header;
