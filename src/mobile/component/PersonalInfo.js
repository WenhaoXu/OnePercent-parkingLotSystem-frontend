import React, {Component} from "react";
import {Card, WingBlank, WhiteSpace, NavBar} from 'antd-mobile';
import {Icon} from 'antd-mobile'
import FontAwesomeIcon from 'react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.css'

class PersonalInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {accountInfo} = this.props;
        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="姓名"
                            thumb={<FontAwesomeIcon name={'user-circle'} style={{fontSize: '25px', marginRight: '5px'}}/>}
                        />
                        <Card.Body>
                            <div>{accountInfo.name}</div>
                        </Card.Body>

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="电子邮箱"
                            thumb={<FontAwesomeIcon name={'envelope-square'} style={{fontSize: '25px', marginRight: '5px'}}/>}
                        />
                        <Card.Body>
                            <div>{accountInfo.email}</div>
                        </Card.Body>

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="手机号码"
                            thumb={<FontAwesomeIcon name={'phone-square'} style={{fontSize: '25px', marginRight: '5px'}}/>}
                        />
                        <Card.Body>
                            <div>{accountInfo.phone}</div>
                        </Card.Body>

                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
            </div>
        );
    }

}

export default PersonalInfo;
