import React, {Component} from "react";
import {Card, WingBlank, WhiteSpace, NavBar} from 'antd-mobile';
import {Icon} from 'antd-mobile'


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
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
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
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
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
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
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
