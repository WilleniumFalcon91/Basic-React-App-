import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Readout from './Readout.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Will is awesome!</h2>
        </div>
        <p className="App-intro">
          It's true.
        </p>
      </div>
    );
  }
}


export default App;
