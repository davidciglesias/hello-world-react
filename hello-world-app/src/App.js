import React, { Component } from 'react';
import winter from './winter.svg';
import './App.css';


class App extends Component {

  playMusic() {
    console.log('aw');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
            <img src={winter} className="App-logo" alt="logo" />
            <p className="App-text">
              <b>Winter</b><br/>I'm the sweetiest sweetie! :>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
