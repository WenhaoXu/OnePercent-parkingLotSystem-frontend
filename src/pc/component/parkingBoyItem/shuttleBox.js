import { Transfer ,Button} from 'antd';
import {connect} from "react-redux";
import React, {Component} from 'react';
import parkingBoyApi from "../../api/parkingBoyApi";


class shuttleBox extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        parkingBoyApi.initLotList(this.props.dispatch,this.props.id);

    }
    handleChange=(targetKeys, direction, moveKeys)=> {
        console.log(targetKeys, direction, moveKeys);
        parkingBoyApi.change(this.props.dispatch,targetKeys,this.props.mockData,direction,moveKeys);
    }

    render() {
        let keys=this.props.keys
        console.log(this.props.keys)
        return (
            <Transfer
                dataSource={this.props.mockData}
                targetKeys={keys}
                onChange={this.handleChange}
                render={item => item.title} />
        );
    }
}
function mapStateToProps(state) {
    console.log(state.shuttleBox)
    return {
        mockData:state.shuttleBox.mockData,
        keys:state.shuttleBox.keys,
    };
}
function  mapDispatchToProps(dispatch) {
    return{dispatch};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(shuttleBox);