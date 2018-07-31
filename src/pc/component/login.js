import React from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox,message} from 'antd';
import axios from 'axios'
import 'animate.css'

const FormItem = Form.Item;

class Login extends React.Component {

  

  handleSubmit = (e) => {
   let history= this.props.history;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.get('http://www.baidu.com')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });


        history.push("/main")
        // message.info('This is a normal message');
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