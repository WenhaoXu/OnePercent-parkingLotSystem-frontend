import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Modal} from "antd";
import {Form} from "antd/lib/index";

class UpdateLot extends Component {


    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {

        const FormItem = Form.Item;

        return (
            <div style={{display:'inline-block'}}>
                <a href="javascript:;" onClick={this.showModal}>修改</a>
                <Modal
                    title="修改停车场"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <FormItem label="名字">
                        <Input ref={"name"} />
                    </FormItem>
                    <FormItem label="大小">
                        <Input  ref={"size"}/>
                    </FormItem>
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(UpdateLot);
