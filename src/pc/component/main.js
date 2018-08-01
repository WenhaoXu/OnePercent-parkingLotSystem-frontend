import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Avatar} from 'antd';

import './main.css'
import {Link} from "react-router-dom";
import EmployeeContainer from '../container/employeeContainer';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class Main extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        // console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        let page = this.props.match.params.page;
        let currentPage;
        let defaultSelectedKeys;
        if (page === 'employee') {
            currentPage = <EmployeeContainer/>;
            defaultSelectedKeys=2;
        } else if (page === 'boy') {
            currentPage = <h2>body</h2>;
            defaultSelectedKeys=3;
        } else if (page === 'dashboard') {
            currentPage = <h2>dashboard</h2>;
            defaultSelectedKeys=4;

        } else if (page === 'order') {
            currentPage = <h2>order</h2>;
            defaultSelectedKeys=5;

        } else {
            currentPage = <h2>employee</h2>;
            defaultSelectedKeys=1;

        }
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={[`${defaultSelectedKeys}`]} mode="inline">
                        <Menu.Item key="1">
                            <Link to={"/main/employee"}>
                                <Icon type="usergroup-add"/>
                                <span>员工管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={"/main/lot"}>
                                <Icon type="car"/>
                                <span>停车场管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={"/main/boy"}>
                                <Icon type="aliwangwang-o"/>
                                <span>停车员管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={"/main/dashboard"}>
                                <Icon type="dashboard"/>
                                <span>停车场Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={"/main/order"}>
                                <Icon type="credit-card"/>
                                <span>订单管理</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header id='header-line'>
                        <Link to={"/login"}>
                            <span>admin</span>
                            <Avatar id='user-avatar' style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>A</Avatar>
                        </Link>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>员工管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            {
                                currentPage
                            }
                        </div>
                       
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        ONE PERCENT @2018
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
