import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Icon, List, NavBar} from 'antd-mobile';
import parkLotListApi from "../api/paringLotListApi";
import parkingLotList from "../reduce/parkingLotList";


const Item = List.Item;

class ParkingLotList extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        parkLotListApi.initParkingLotlist(this.props.dispatch)
    }

    state = {
        conditions: []
    };
     backup=(id)=>{

       localStorage.setItem("choseParkingLotId",id);
        let dispatch= this.props.dispatch;
         dispatch ({
             type:"INDICATOR",
             payload:1});
     }

    render() {

        let dispatch = this.props.dispatch;
        let list=this.props.list;
        return (
            <div>
                <NavBar mode="dark"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => dispatch ({
                            type:"INDICATOR",
                            payload:1
                        })}
                >选停车场</NavBar>
                <List renderHeader className="my-list">
                    {(() => {

                        return list.map(item => (
                            <Item id={item.id} onClick={() => this.backup(item.id)} > {item.name} {item.spareSize}/{item.totalSize}</Item>
                        ));
                    })()}

                </List>
            </div>
        )
    };
}

function mapStateToProps(state) {
     console.log(state.parkingLotList)
    return {

        list: state.parkingLotList.lotList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLotList);
