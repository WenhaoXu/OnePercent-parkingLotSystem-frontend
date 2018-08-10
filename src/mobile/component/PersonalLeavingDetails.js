import React, {Component} from "react";
import {connect} from 'react-redux'
import {DatePicker} from 'antd'
import {
    Card, WingBlank, WhiteSpace, NavBar, Button, Icon, Toast, Result,
    Modal, List, DatePickerView, TextareaItem, Accordion, ListView, Steps
} from 'antd-mobile';
import FontAwesomeIcon from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import userApi from "../api/userApi";
import {message} from "antd/lib/index";

const {RangePicker} = DatePicker;
const Item = List.Item;
const Brief = Item.Brief;

const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt=""/>;
const Step = Steps.Step;
const normalSteps = [{
    title: '填写申请',
    description: '填写申请',
}, {
    title: '已提交',
    description: '等待审批中',
}, {
    title: '已完成',
    description: '申请通过',
}].map((s, i) => <Step key={i} title={s.title} description={s.description}/>);

const errorSteps = [{
    title: '填写申请',
    description: '填写申请',
}, {
    title: '已提交',
    description: '等待审批中',
}, {
    title: '失败',
    description: '申请已被拒绝',
}].map((s, i) => <Step key={i} title={s.title} description={s.description}/>);

class PersonalLeavingDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        switch (this.props.leavingDetails.status) {
            case 'pending':
                this.statusCode = 1;
                this.statusStr = 'process';
                break;
            case 'approval':
                this.statusStr = 'success'
                this.statusCode = 2;
                break;
            case 'rejected':
                this.statusStr = 'error';
                this.statusCode = 2;
                break
            default:
                this.statusCode = 0;
                this.statusStr = 'wait';
                break;
        }
    }

    render() {
        console.log(this.statusStr)
        return (
            <div>
                <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
                    title="等待处理"
                    message="已提交申请，等待经理审批中"
                />

                <Steps status={this.statusStr} current={this.statusCode} direction="horizontal">{this.props.leavingDetails.status === 'rejected' ? errorSteps : normalSteps}</Steps>

            </div>
        )
    }

}

export default PersonalLeavingDetails;