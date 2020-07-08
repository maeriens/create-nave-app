import React, { Component } from 'react';
import Konami from 'react-konami-code';
import nave from './nave.png';
import gabi from './gabi.png';
import './App.css';

class App extends Component {

  state = { logo: null };

  egg = () => this.setState({ logo: gabi });

  render() {
    return (
      <>
        <Konami
          action={this.egg}
          code={[71, 65, 66, 73]}
        />
        <div className="App">
          <header className="App-header">
            <img src={this.state.logo || nave} className="App-logo" alt="logo" />
            <p>In Nave Memorian</p>
            <p>2016 - 2020</p>
            <p>No se murió pero en Suecia debe ser de noche y estará durmiendo</p>
            <p>
              Mandale cumbia y <a
                className="repo"
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
      </>
    );
  }
}

export default App;
