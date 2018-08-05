import React, { Component } from 'react';
import {Button,Select,Input} from 'antd'
const Option = Select.Option;
let chooseMenu="id";
let inputSelectValue="";

export default  class OrderHeader extends Component {

    constructor(props){
        super(props);

    }

    search=(type,content)=>{
        this.props.OnSearch(type,content);
    }

    setChooseMenu=(e)=>{
        chooseMenu = e;
    }
    setInputValue=(e)=>{
        inputSelectValue = e.target.value;
    }

    render() {
        return (
            <div align="right" >
                <div>
                    <Select defaultValue="id" onChange={this.setChooseMenu} style={{ width: '10%' }} >
                        <Option value="id">id</Option>
                        <Option value="carNo">车牌号</Option>
                        <Option value="type">类型</Option>
                        <Option value="status">状态</Option>
                    </Select>
                    <Input style={{ width: '15%' }} onChange={this.setInputValue} defaultValue="" />
                    <Button
                        type="primary"
                        onClick={()=>this.search(chooseMenu,inputSelectValue)}>
                        搜索
                    </Button>
                </div>
            </div>
        );
    }
}

