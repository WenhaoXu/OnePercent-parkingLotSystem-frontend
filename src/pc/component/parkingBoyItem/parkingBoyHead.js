import {connect} from "react-redux";
import React, {Component} from 'react';
import {Button, Select, Input, Form} from 'antd'

const Option = Select.Option;

class parkingBoyHead extends Component {
    constructor(props) {
        super(props);
        this.inputElem = React.createRef();
        this.searchType = 'name';
    }

    onSearchButtonClicked = () => {
        this.props.searchParkingBoy(this.searchType, this.inputElem.current.value);
    }

    render() {
        return (
            <div>
                <div className="searchBar">
                    <Select defaultValue={this.searchType} onChange={(value) => this.searchType = value}>
                        <Option value="id">id</Option>
                        <Option value="name">姓名</Option>
                        <Option value="phone">手机号</Option>
                    </Select>
                    <input
                        style={{
                            width: '50%',
                            padding: '4px 11px'
                        }}
                        defaultValue=""
                        ref={this.inputElem}
                    />
                    <Button
                        type="primary"
                        onClick={this.onSearchButtonClicked}>
                        搜索
                    </Button>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(parkingBoyHead);