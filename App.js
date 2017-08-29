import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Readout from './Readout.js'
import MagicButton from './MagicButton.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.theNumber = 999;
  }
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
        <MagicButton title="Press here for fun" />
      </div>
    );
  }
}


export default App;
