import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Progress, Row} from "antd";
import './dashboard.css'

class DashBoard extends Component {
    render() {
        return (
            <div style={{background: '#fff', padding: '30px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={true}>
                            <div className={'card-wrap'}>
                                <div>
                                    <Progress type="circle" percent={4 / 11 * 100} format={percent => `4 /11`}/>
                                    <p className={'detail'}>停车情况</p>
                                </div>
                                <div className={'boy'}>
                                    <p>停车员：小美</p>
                                </div>
                            </div>
                        </Card>
                    </Col>


                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(DashBoard);
