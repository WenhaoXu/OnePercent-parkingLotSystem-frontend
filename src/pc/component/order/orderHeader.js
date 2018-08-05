import React, { Component } from 'react';
import {Button,Select,Input} from 'antd'
const Option = Select.Option;
let chooseMenu="id";
let inputSelectValue="";

export default  class OrderHeader extends Component {

    constructor(props){
        super(props);

    }
    // showModal=()=>{
    //     const changeAddStatusfromMap = this.props.changeAddStatusfromMap;
    //     changeAddStatusfromMap(true);
    // }

    search=(type,content)=>{
        console.log("666666666");
        this.props.OnSearch(type,content);
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

