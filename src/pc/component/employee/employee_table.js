import React from 'react';
import  {Table,Divider,Popconfirm ,message} from 'antd';
import './employee.css';
import Employee_addPopupContainer from '../../container/employee_addPopupContainer'
import Employee_updatePopupContainer from '../../container/employee_updatePopupContainer'
const { Column} = Table;

const chooseItemId ="";
const chooseItemStatus="";
class Employee_table extends React.Component {
    constructor(props){
        super(props);
    }

    showUpdateModal=(values)=>{
        console.log("update++++"+values.phone);
        const getChooseValuefromMap = this.props.getChooseValuefromMap;
        getChooseValuefromMap(values);
    }
    frozen=(id,status)=>{
        this.chooseItemId = id;
        this.chooseItemStatus = status;
    }
    confirm=(e)=>{
        let type = this.chooseItemStatus=="1"?'冻结':'恢复'
        message.success('成功'+type+'员工');
        const forzenEmployeefromMap = this.props.forzenEmployeefromMap;
        forzenEmployeefromMap(this.chooseItemId);
    }

    cancel=(e)=> {
        console.log(e);
        message.warning('取消冻结员工');
    }

    render() {
        const data = this.props.employeeList;
        return (
            <div>
                <Table dataSource={data} rowKey="id">
                    <Column
                        title="id"
                        dataIndex="id"
                        key="id"
                    />

                    <Column
                        title="用户名"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="姓名"
                        dataIndex="userName"
                        key="userName"
                    />
                    <Column
                        title="email"
                        dataIndex="email"
                        key="email"
                    />
                    <Column
                        title="电话号码"
                        dataIndex="phone"
                        key="phone"
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <span>
                <a onClick={()=>this.showUpdateModal(record)}>修改</a>
                <Divider type="vertical" />

                                <Popconfirm title="确定冻结此用户？" onConfirm={this.confirm} onCancel={this.cancel} okText="Yes" cancelText="No">
                                <a onClick={()=>this.frozen(record.id,record.loginFlag)}>{record.loginFlag==1?"冻结":"恢复"}</a>
                                </Popconfirm>

                                <Divider type="vertical" />
                </span>
                        )}
                    />


                </Table>
                <p>总共:{this.props.employeeList.length}个员工</p>
                <Employee_addPopupContainer/>
                <Employee_updatePopupContainer/>
            </div>
        );
    }
}

export default Employee_table;