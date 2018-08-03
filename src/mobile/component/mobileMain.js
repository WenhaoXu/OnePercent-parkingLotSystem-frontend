import React from 'react';
import {TabBar} from 'antd-mobile';
import '../../mobile/component/mobileMain'
import ParkAndTake from "../component/parkAndTake";
import HistoryContainer from "../container/historyContainer"
import {connect} from 'react-redux';
import OrderList from "../container/order/orderListContainer";

class mobileMain extends React.Component {

    componentWillMount() {
        let item = localStorage.getItem("token");
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '抢单',
            hidden: false,
        };
    }

    render() {
        return (
            <div>
                <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        tabBarPosition="bottom"
                        hidden={this.state.hidden}
                        prerenderingSiblingsNumber={0}
                    >
                        <TabBar.Item
                            title="抢单"
                            key="Robb"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === '抢单'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '抢单',
                                });
                            }}
                            data-seed="logId"
                        >
                            <OrderList/>

                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="停取"
                            key="ParkAndTake"
                            selected={this.state.selectedTab === '停取工作列表'}
                            dot
                            onPress={() => {
                                this.setState({
                                    selectedTab: '停取工作列表',
                                });

                                this.props.dispatch({
                                    type:"NEED_UPDATE",
                                    payload:true
                                })
                                console.log(123);
                            }}
                            data-seed="logId1"
                        >
                            <ParkAndTake/>

                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="历史"
                            key="history"

                            selected={this.state.selectedTab === '历史'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '历史',
                                });
                            }}
                        >
                            <HistoryContainer/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
                            selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
                            title="个人"
                            key="my"
                            selected={this.state.selectedTab === '个人'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '个人',
                                });
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        );
    }
}





function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(mobileMain);
