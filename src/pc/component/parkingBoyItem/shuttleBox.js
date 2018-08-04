import { Transfer } from 'antd';
import {connect} from "react-redux";
import React, {Component} from 'react';
import parkingBoyApi from "../../api/parkingBoyApi";

const mockData = [];
for (let i = 0; i < 20; i++) {
    mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
    });
}

const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);







class shuttleBox extends Component {

    componentWillMount(){
        parkingBoyApi.initLotList(this.props.dispatch,this.props.id);

    }
    state = {
        targetKeys,
        selectedKeys: [],
    }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });

        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    }

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    }

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    }




    render() {
        const state = this.state;
        console.log(this.props.id)
        return (
            <Transfer
                dataSource={mockData}
                titles={['可选停车场', '管理的停车场']}
                targetKeys={state.targetKeys}
                selectedKeys={state.selectedKeys}
                onChange={this.handleChange}
                onSelectChange={this.handleSelectChange}
                onScroll={this.handleScroll}
                render={item => item.title}
            />
        );
    }
}
function mapStateToProps(state) {

    return {};
}
function  mapDispatchToProps(dispatch) {
    return{};
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(shuttleBox);