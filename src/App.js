import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Board />
      </div>
    );
  }
}

export default App;
