import React from 'react';
import { List, InputItem, Button} from 'antd-mobile';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="login">
        <label className="label">停车场管理系统</label>
        <List className="list">
            <InputItem
                placeholder="请输入用户名"
            >用户名</InputItem>
            <InputItem
                type="password"
                placeholder="请输入密码"
            >密码</InputItem>
        </List>
        <Button className="button" type="primary">登录</Button>
        </div>
    );
  }
}

export default Login;
