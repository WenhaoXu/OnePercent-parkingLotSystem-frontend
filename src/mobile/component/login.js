import React from 'react';
import {List, InputItem, Button} from 'antd-mobile';
import './login.css';
import LoginApi from "../api/login";
import {connect} from 'react-redux';


class Login extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        localStorage.removeItem("token")
    }

    render() {

        let dispatch = this.props.dispatch;
        let history= this.props.history;

        return (
            <div className="login">
                <label className="label">停车场管理系统</label>
                <List className="list">
                    <InputItem ref={el => this.inputRef = el}
                               placeholder="请输入用户名"
                    >用户名</InputItem>
                    <InputItem ref={el => this.password = el}
                               type="password"
                               placeholder="请输入密码"
                    >密码</InputItem>
                </List>
                <Button className="button" type="primary"
                        onClick={() => LoginApi.login(history, this.inputRef.state.value, this.password.state.value)}>登录</Button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);



