import React, {Component} from "react";
import {connect} from 'react-redux'
import {DatePicker} from 'antd'
import {
    Card, WingBlank, WhiteSpace, NavBar, Button, Icon, Toast,
    Modal, List, DatePickerView, TextareaItem, Accordion, ListView
} from 'antd-mobile';
import FontAwesomeIcon from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import userApi from "../api/userApi";
import {message} from "antd/lib/index";

const {RangePicker} = DatePicker;
const Item = List.Item;
const Brief = Item.Brief;

class PersonalLeavePage extends Component {
    constructor(props) {
        super(props);
        this.leaveModal = {
            startDate: null, endDate: null, reasonObject: null
        }
    }

    onSubmitButtonClicked = () => {
        let tokenObjectStr = localStorage.getItem("token");
        let tokenObject = JSON.parse(tokenObjectStr);
        const employee = {id: tokenObject.userId};
        const param = {
            employee: employee,
            startDate: this.leaveModal.startDate,
            endDate: this.leaveModal.endDate,
            reason: this.leaveModal.reasonObject.state.value,
        };
        console.log(JSON.stringify(param));
        this.props.addLeaving(param);
    }

    onCreateRequestButtonClicked = () => {
        let card = (
            <Card>
                <Card.Header
                    title={
                        <div>
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="起始时间"
                                onChange={(value) => {
                                    this.leaveModal.startDate = value
                                }}
                            />
                            <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="结束时间"
                                onChange={(value) => {
                                    this.leaveModal.endDate = value
                                }}
                            />
                        </div>
                    }
                />
                <Card.Body>
                    <div>
                        <TextareaItem
                            placeholder="请输入您的请假理由"
                            data-seed="logId"
                            autoHeight
                            ref={el => this.leaveModal.reasonObject = el}
                        />
                    </div>
                </Card.Body>
            </Card>
        );
        Modal.alert('请输入您的请假信息：', card,
            [
                {text: '取消'},
                {
                    text: '提交', onPress: this.onSubmitButtonClicked
                }
            ]);
    }

    onLeavingDetailsClicked = (leavingId) => {
        this.props.loadLeavingDetails(leavingId);
    }

    componentDidMount(){
        let tokenObjectStr = localStorage.getItem("token");
        let tokenObject = JSON.parse(tokenObjectStr);
        this.props.loadLeavings(tokenObject.userId);
    }

    dateTimeFormat = (datetime) => {
        let datetimeStr = `${datetime.getUTCFullYear()}-${datetime.getUTCMonth()}-${datetime.getUTCDay()}
        ${datetime.getUTCHours()}:${datetime.getUTCMinutes()}`
        console.log(datetimeStr)
        return datetimeStr;
    }

    render() {
        const addButton = (
            <a onClick={() => {
                this.onCreateRequestButtonClicked()}}><FontAwesomeIcon name={'plus-circle'} style={
                {fontSize: '40px', position: 'fixed', bottom: '8%', right: '4%'}}/></a>
        );

        return (
            <div>

                {this.props.leavings ? this.props.leavings.map(item => (

                    <List renderHeader={() => item.createDate} className="my-list">
                        <Item>{item.employee.name}</Item>
                        <Item onClick={this.onLeavingDetailsClicked.bind(this, item.id)} extra={<p>{this.dateTimeFormat(new Date(item.startDate))}
                        <br/>{this.dateTimeFormat(new Date(item.endDate))}</p>} align="top" multipleLine>
                            {item.reason}
                        </Item>
                    </List>

                )) : ''}

                {addButton}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return state.PersonalPageReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addLeaving: (param) => {
            const successCallback = (leaving) => message.success("请假申请提交成功！");
            userApi.sendLeavingRequest(param, successCallback);
        },
        loadLeavings: (employeeId) => {
            const  successCallback = (leavings) => {
                dispatch({type: 2, value: leavings});
            };
            userApi.loadAllLeavingData(employeeId, successCallback);
        },
        loadLeavingDetails: (leavingId) => {
            const  successCallback = (leavingDetails) => {
                dispatch({type: 3, value: leavingDetails});
            };
            userApi.getLeavingDetails(leavingId, successCallback);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalLeavePage);