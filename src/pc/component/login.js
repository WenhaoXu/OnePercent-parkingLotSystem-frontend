import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox,message} from 'antd';
import axios from 'axios'
import 'animate.css'
import 'whatwg-fetch'

const FormItem = Form.Item;

class Login extends React.Component {


    componentWillMount() {
        localStorage.removeItem("token")
    }


    handleSubmit = (e) => {
   let history= this.props.history;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('https://parkinglotappofsystem.herokuapp.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: 'admin',
            password: 'admin',
          })
        }).then(function(response) {
          response.text().then(v=>{
            let parse = JSON.parse(v);
              let token = parse.token;
              let role=parse.role;
              let name=parse.name;
              let id=parse.id;
            localStorage.setItem("token",token);
            localStorage.setItem("role",role);
            localStorage.setItem("name",name);
            localStorage.setItem("id",id)
              history.push("/main");
          })
        })
      }

    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginDiv">
      <label className="LoginTitle  animated flipInY" style={{fontSize:45,fontWeight:'bold', margin:'0 0 20px 0 '}}>停车场管理系统</label>
      <div className="LoginForm animated flipInY">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <div>
            <label>用户名：</label>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <div>
              <label>密码：</label>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"  />
            </div>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <Button type="primary" htmlType="submit" className="login-form-button" style={{margin:'15px 0 0 0'}}>
            登录
          </Button>
        </FormItem>
      </Form>
      </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default WrappedNormalLoginForm