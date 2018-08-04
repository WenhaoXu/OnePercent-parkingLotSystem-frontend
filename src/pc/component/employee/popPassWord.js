import React, {Component} from 'react';
import {Modal} from 'antd'

class PopPassWord extends Component {

    handleOk = (e) => {
        console.log(e);
        const changeAddPopStatusfromMap = this.props.changeAddPopStatusfromMap;
        changeAddPopStatusfromMap(false);
    }

    handleCancel = (e) => {
        console.log(e);
        const changeAddPopStatusfromMap = this.props.changeAddPopStatusfromMap;
        changeAddPopStatusfromMap(false);
    }

    render() {
        return (
            <Modal
                visible={this.props.AddPopStatus}
                title="提示"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
            >
                <p>用户名：{this.props.popPassWordValue==[]?"":this.props.popPassWordValue.name}</p>
                <p>密码：{this.props.popPassWordValue==[]?"":this.props.popPassWordValue.password}</p>
            </Modal>
        );
    }
}

export default PopPassWord;
