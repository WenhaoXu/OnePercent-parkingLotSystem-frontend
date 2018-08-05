import {connect} from 'react-redux'
import React, {Component} from "react";
import {List, NavBar} from 'antd-mobile';
import PersonalInfo from "./PersonalInfo";
import userApi from '../api/userApi';
import {Icon,Button,WhiteSpace} from 'antd-mobile'
import FontAwesomeIcon from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.css'


const Item = List.Item;
const Brief = Item.Brief;

class PersonalPage extends Component {

    constructor(props) {
        super(props);
    }

    mainPage() {
        return (
            <List renderHeader={() => <span><FontAwesomeIcon name={'user'} />  个人账户信息</span>} className='my-list'>
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
      window.location.href="https://appparkinglot.herokuapp.com/mobile/login"
    }

    handleStartWork=()=>{

        console.log("handleStartWork")
        userApi.startWork()
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

                <Button type="primary"  style={{margin:"120px 20px 0 20px" }} onClick={this.handleStartWork}>打卡</Button>
                <Button type="warning" onClick={()=>this.quit()}   style={{margin:"15px 20px 0 20px" }}>退出</Button><WhiteSpace />

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