import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Readout from './Readout.js';
import MagicButton from './MagicButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theNumber: 999
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Will is awesome!</h2>
        </div>
        {/* <p className="App-intro"> */}
          <Readout unit="f" temperature={this.state.theNumber} />
        {/* </p> */}
        <MagicButton 
          title="Press here for fun" 
          handleClick={this._changeNumber}
        />
      </div>
    );
  }

  _changeNumber = () => {
    console.log('I am having the time of my life');
    const newNumber = this.state.theNumber * this.state.theNumber;
    this.setState({
      theNumber: newNumber
    });
    // console.log(this.state.theNumber);
  }
}


export default App;
