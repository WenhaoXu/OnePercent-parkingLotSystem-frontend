import React, { Component } from 'react';
import {Button,Select,Input} from 'antd'
const Option = Select.Option;
let chooseMenu="";
let inputSelectValue="";

export default  class OrderHeader extends Component {

    constructor(props){
        super(props);

    }
    // showModal=()=>{
    //     const changeAddStatusfromMap = this.props.changeAddStatusfromMap;
    //     changeAddStatusfromMap(true);
    // }

    search(){
        console.log("666666666");
        let type="";
        let content="";
        // this.props.OnSearch(type,content);
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
                <div className="input">
                    <Select defaultValue="选项" onChange={this.setChooseMenu}>
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

