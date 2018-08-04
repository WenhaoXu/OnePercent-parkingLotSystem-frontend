import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, Col, Progress, Row, Carousel} from "antd";
import './dashboard.css'
import dashboardAPI from '../api/dashboardAPI';

class DashBoard extends Component {

    componentDidMount() {
        dashboardAPI.loadParkingLots(this.props.refreshParkingLots);
    }


    render() {
        const parkingLots = this.props.parkingLots;
        const pageSize = 12;
        const carouselDivs = [];
        for (let i = 0; i < parkingLots.length; i += pageSize) {
            let cols = [];
            for (let j = i; j < i + pageSize && j < parkingLots.length; j++) {
                let parkingLot = parkingLots[j];
                let content = (
                    <Col span={6}>
                        <Card title={parkingLot.name}
                              bordered={true}
                              hoverable
                              style={{marginBottom: '20px'}}
                              bodyStyle={{padding: '13px'}}
                        >
                            <div className={'card-wrap'}>
                                <div>
                                    <Progress type="circle" percent={parkingLot.spareSize / parkingLot.totalSize * 100}
                                              format={percent => percent.toFixed(2) + '%'}/>
                                    <p className={'detail'}>总车位：{parkingLot.totalSize}<br/>剩余车位：{parkingLot.spareSize}</p>
                                </div>
                                <div className={'boy'}>
                                    <p>停车员：{parkingLot.coordinator===null?"无":parkingLot.coordinator.userName}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                );
                cols.push(content);
            }
            console.log('cols size: ' + cols.length)
            let div = <div><Row gutter={16}>{cols}</Row></div>;
            carouselDivs.push(div);
        }
        return (
            <div style={{background: '#fff', padding: '30px'}}>
                <Carousel autoplay>
                    {carouselDivs}
                </Carousel>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.DashBoardReducer;
}

const mapDispatchToProps = (dispath) => {
    return {
        refreshParkingLots: (parkingLots) => {
            dispath({value: parkingLots, type: 'REFRESH_PARKINGlOTS'});
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
