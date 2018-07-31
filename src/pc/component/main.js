import React, {Component} from 'react';

class Main extends Component {


    render() {
        console.log(this.props)
        let state = this.props.state;
        return (
            <div>
                <h2>主页面{state }</h2>
            </div>
        );
    }
}

export default Main;
