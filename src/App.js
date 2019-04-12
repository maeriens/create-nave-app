import React, { Component } from 'react';
import logo from './nave.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mandale cumbia y <a 
            class="repo" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="https://github.com/maeriens/create-nave-app">
              PR al repo
            </a> y sale con fritas
          </p>
          <a
            className="App-link"
            href="https://www.instagram.com/federiconaveira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Peer into the Nave
          </a>
        </header>
      </div>
    );
  }
}

export default App;
