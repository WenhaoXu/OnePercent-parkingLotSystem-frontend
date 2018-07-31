import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Avatar} from 'antd';

import './main.css'

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;


class Main extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="usergroup-add"/>
                            <span>员工管理</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="car"/>
                            <span>停车场管理</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="aliwangwang-o" />
                            <span>停车员管理</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="dashboard"/>
                            <span>停车场Dashboard</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="credit-card"/>
                            <span>订单管理</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header id='header-line' >
                        <span>小黑</span>
                        <Avatar id='user-avatar' style={{color: '#f56a00', backgroundColor: '#fde3cf'}}>U</Avatar>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>员工管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
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
