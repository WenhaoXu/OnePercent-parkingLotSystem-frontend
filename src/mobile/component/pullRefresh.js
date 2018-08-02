import React, {Component} from "react";
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from 'react-dom';
import ParkAndTake from "../component/parkAndTake";


class pullRefresh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
                height: document.documentElement.clientHeight,
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: document.documentElement.clientHeight,
        }), 0);
    }
    render() {
        return (
            <div>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({ refreshing: true });
                        setTimeout(() => {
                            this.setState({ refreshing: false });
                        }, 1000);
                    }}
                >
                    <ParkAndTake/>
                </PullToRefresh>
            </div>
        );
    }
}

export default pullRefresh;