import {connect} from "react-redux";
import React, {Component} from 'react';
import {Button,Select,Input} from 'antd'
const Option = Select.Option;
class parkingBoyHead extends Component{

    render(){
        return(
            <div>
            <div className="input">
                <Select defaultValue="name">
                    <Option value="id">id</Option>
                    <Option value="name">姓名</Option>
                    <Option value="phoneNumber">手机号</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="" />
                <Button
                    type="primary"
                    onClick={this.start}>
                    搜索
                </Button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}
function  mapDispatchToProps(dispatch) {
    return{};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(parkingBoyHead);