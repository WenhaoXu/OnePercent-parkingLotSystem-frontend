import React, { Component } from 'react';
// import { Button } from 'antd';
import { Button } from 'antd-mobile';
import Main from "./pc/container/main";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Button type="primary">Primary</Button> */}
        <Button>default</Button>
      </div>
    );
  }
}

export default App;
