import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Form, Input, Modal} from "antd";
import 'whatwg-fetch'
import lotApi from '../api/lot'
import {message} from 'antd';


class AdddLot extends Component {
    state = {visible: false}

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        let name = this.refs.name.input.value;
        let size = this.refs.size.input.value;
        if (this.props.lot.dataSource.find(item => item.name == name) !== null) {
            message.error('不允许有重名停车场！');
        } else {
            lotApi.add(this.props.dispatch, name, size);
        }
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const FormItem = Form.Item;
        let name;
        return (
            <div>
                <Button type={'primary'} onClick={this.showModal}>新建</Button>
                <Modal
                    title="新建停车场"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <FormItem label="名字">
                        <Input ref={"name"}/>
                    </FormItem>
                    <FormItem label="大小">
                        <Input ref={"size"}/>
                    </FormItem>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {

    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdddLot);
