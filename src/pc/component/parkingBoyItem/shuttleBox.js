import { Transfer ,Button} from 'antd';
import {connect} from "react-redux";
import React, {Component} from 'react';
import parkingBoyApi from "../../api/parkingBoyApi";


class shuttleBox extends Component {

    componentWillMount(){
        parkingBoyApi.initLotList(this.props.dispatch,this.props.id);

    }

    // getMock() {
    //     let targetKeys = [];
    //     let mockData = [];
    //     for (let i = 0; i < 20; i++) {
    //         const data = {
    //             key: i,
    //             title: `内容${i + 1}`,
    //             description: `内容${i + 1}的描述`,
    //             chosen: Math.random() * 2 > 1
    //         };
    //         if (data.chosen) {
    //             targetKeys.push(data.key);
    //         }
    //         mockData.push(data);
    //     }
    //     this.setState({ mockData, targetKeys });
    // }
    handleChange(targetKeys, direction, moveKeys) {
        console.log(targetKeys, direction, moveKeys);
        this.setState({ targetKeys });
    }
    // renderFooter() {
    //     return (
    //         <Button type="primary" size="small" style={{ float: 'right', margin: '5' }}
    //                 onClick={this.getMock}>
    //             刷新
    //         </Button>
    //     );
    // }
    render() {
        return (
            <Transfer
                dataSource={this.state.mockData}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={item => item.title} />
        );
    }
}
function mapStateToProps(state) {

    return {
        mockData:state.shuttleBox.mockData,
        targetKeys:state.shuttleBox.targetKeys,
    };
}
function  mapDispatchToProps(dispatch) {
    return{dispatch};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(shuttleBox);