import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Modal} from "antd";
import {Form} from "antd/lib/index";
import lotApi from '../api/lot'

class UpdateLot extends Component {

    state = {visible: false};
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (id) => {

        let name = this.refs.name.input.value;
        let size = this.refs.totalSize.input.value;
        lotApi.update(this.props.dispatch,id, name, size);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        const FormItem = Form.Item;
        return (
            <div style={{display: 'inline-block'}}>
                <a href="javascript:;" onClick={this.showModal}>修改</a>
                <Modal
                    title="修改停车场"
                    visible={this.state.visible}
                    onOk={() => this.handleOk(this.props.record.id)}
                    onCancel={this.handleCancel}
                >
                    <FormItem label="名字">
                        <Input ref={"name"} defaultValue={this.props.record.name}/>
                    </FormItem>
                    <FormItem label="大小">
                        <Input ref={"totalSize"} defaultValue={this.props.record.totalSize}/>
                    </FormItem>
                </Modal>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateLot);
