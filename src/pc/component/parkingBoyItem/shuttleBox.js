import { Transfer ,Button} from 'antd';
import {connect} from "react-redux";
import React, {Component} from 'react';
import parkingBoyApi from "../../api/parkingBoyApi";


class shuttleBox extends Component {

    constructor(props) {
        super(props);
        this.handleChange.bind(this)
    }

    componentWillMount(){
        parkingBoyApi.initLotList(this.props.dispatch,this.props.id);

    }
    handleChange=(targetKeys, direction, moveKeys,dispatch,mockData,id)=>{
        console.log(targetKeys, direction, moveKeys);
        alert(id)
        parkingBoyApi.change(dispatch,targetKeys,mockData,direction,moveKeys,id);
    }

    render() {
        let loaclstate=   this.props.data.length==1||this.props.data.newState==undefined||this.props.data.newState.filter(item=>item.record==this.props.id).length==0 ?this.props.data[0]: this.props.data.newState.filter(item=>item.record==this.props.id)[0]
        if(loaclstate==undefined){
            loaclstate={record: 0,mockData:[],keys:[]}
        }
        console.log(loaclstate)
        let keys=loaclstate.keys
        console.log(loaclstate.keys)
        return (
            <Transfer
                dataSource={loaclstate.mockData}
                targetKeys={keys}
                onChange={(targetKeys, direction, moveKeys)=>this.handleChange(targetKeys, direction, moveKeys,this.props.dispatch,loaclstate.mockData,this.props.id)}
                render={item => item.title} />
        );
    }
}
function mapStateToProps(state) {
    console.log(state.shuttleBox)
    return {
        data:state.shuttleBox,
        // mockData:state.shuttleBox.mockData,
        // keys:state.shuttleBox.keys,
        // record:state.shuttleBox.record,
    };
}
function  mapDispatchToProps(dispatch) {
    return{dispatch};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(shuttleBox);