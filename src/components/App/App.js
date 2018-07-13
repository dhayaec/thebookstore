import React, { Component } from 'react';
import './App.css';

const randomNumber = () => Math.floor(Math.random() * 10);

class App extends Component {
  render() {
    const random = randomNumber();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Welcome to
            {' '}
            <b>
The Book Store
            </b>
          </h1>
          <h1>
            {random}
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
