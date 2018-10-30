import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicCollection from './components/VirtualCollectionBasic';

class App extends Component {
  render() {
    const collection = Array(1000).fill(1).map((item, index) => index);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <BasicCollection collection={collection} />
        </p>
      </div>
    );
  }
}

export default App;
