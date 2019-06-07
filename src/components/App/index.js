import React, { Component } from 'react';
import './App.scss';
import Header from '../Header';
import Main from '../Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <Main />
        </p>
      </div>
    );
  }
}

export default App;
