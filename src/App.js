import React, { Component } from 'react';
import './App.css';
import Login from './component/Login';

class App extends Component {

  render() {
    return (
        <div className="centerDiv"><div className="LoginForm"><Login /></div></div>
    );
  }
}

export default App;
