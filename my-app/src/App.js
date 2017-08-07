import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    /*cont-list[
      'Comer'
      'Escuchar Música'
      'Ver Netflix'
      'Viajar'
      'Patinar'
      'Leer Novelas'
    ];*/

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Hobbies in React</h2>
        </div>

        <div className="cont-list">
          <ul>
            <li className="a">Comer</li>
            <li className="b">Escuchar Música</li>
            <li className="c">Ver Netflix</li>
            <li className="d">Viajar</li>
            <li className="e">Patinar</li>
            <li className="f">Leer Novelas</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
