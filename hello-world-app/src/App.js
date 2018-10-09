import React, { Component } from 'react';
import winter from './winter.svg';
import './App.css';


class App extends Component {

  playMusic() {
    console.log('aw');
  }

  getRandomOption() {
    const listOptions = [
      'Mommy, feed me!!!!',
      'Woooooo!! :D',
      'I am a wonderful caaaaat!',
      'Yay!!!',
      'Cats are amazing, but I\'m even more so!'
    ];
    return listOptions[Math.floor(Math.random() * (listOptions.length - 1)) + 1];
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
            <img src={winter} className="App-logo" alt="logo" />
            <p className="App-text">
              <b>Winter</b><br/>{this.getRandomOption()}
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
