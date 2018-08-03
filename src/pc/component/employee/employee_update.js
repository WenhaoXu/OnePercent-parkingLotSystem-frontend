import React from 'react';
import { Form, Input,Select,Button} from 'antd';
import Employee from '../../model/Employee'
import '../../component/employee/register.css';
const FormItem = Form.Item;
const Option = Select.Option;

class employeeUpdate extends React.Component {
  constructor(props) {
    super(props);
  }
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const selfThis = this;
      this.props.form.validateFieldsAndScroll((err, values) => {
        
        if (!err) {
          console.log('Received values of form: ', values);
          const {updateEmployeefromMap,changeUpdateStatusfromMap} = selfThis.props;
          const employee = new Employee(values.name,values.email,values.phone);
            updateEmployeefromMap(employee);
            changeUpdateStatusfromMap(false);
        }
      });
    }
  
    // handleConfirmBlur = (e) => {
    //   const value = e.target.value;
    //   this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    // }
  
  
    render() {
      const { getFieldDecorator } = this.props.form
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
      })(
        <Select style={{ width: 70 }}>
          <Option value="86">+86</Option>
          <Option value="87">+87</Option>
        </Select>
      );
  
  
      return (
        <Form onSubmit={this.handleSubmit} >
          <FormItem
            {...formItemLayout}
            label="邮箱："
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                姓名q
                
              </span>
            )}
          >
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="电话："
          >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(
              <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create()(employeeUpdate);
  
  export default WrappedRegistrationForm 