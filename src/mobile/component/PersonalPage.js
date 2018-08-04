import {connect} from 'react-redux'
import React, {Component} from "react";
import {List, NavBar} from 'antd-mobile';
import PersonalInfo from "./PersonalInfo";
import userApi from '../api/userApi';
import {Icon,Button,WhiteSpace} from 'antd-mobile'


const Item = List.Item;
const Brief = Item.Brief;

class PersonalPage extends Component {

    constructor(props) {
        super(props);
    }

    mainPage() {
        return (
            <List renderHeader={() => '个人账户信息'} className='my-list'>
                <Item arrow="horizontal" multipleLine onClick={() => {
                    this.props.switchToInfoPage()
                }}>
                    查看账户信息
                    <Brief>查看账户信息详情</Brief>
                </Item>
            </List>
        );
    }

    quit=()=>{
      localStorage.clear();
      window.location.href="http://localhost:9000/mobile/login"
    }

    render() {
        console.log(JSON.stringify(this.props))
        let component;
        let title;
        switch (this.props.pageIndicator) {
            case 1:
                component = <PersonalInfo accountInfo={this.props.accountInfo}/>;
                title = '账户详细信息'
                break;
            default:
                component = this.mainPage();
                title = '我的账户'
                break;
        }
        return (
            <div>
                <NavBar mode="dark"
                        icon={title !== '我的账户' ? <Icon type={'left'}></Icon> : null}
                onLeftClick={this.props.switchToMainPage}>{title}
                </NavBar>
                {component}
                <Button type="primary" onClick={()=>this.quit()}   style={{marginTop:" 170px" }}>退出</Button><WhiteSpace />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.PersonalPageReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchToInfoPage: () => {
            let callback = (accountInfo) => {
                dispatch({type: 1, value: {accountInfo}})
            }
            userApi.getCurrentAccountInfo(callback);
        },
        switchToMainPage: () => {
            dispatch({type: 0});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);