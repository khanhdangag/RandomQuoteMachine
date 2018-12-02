import React, { Component } from 'react';
import './App.css';
import QuotesMachine from './QuotesMachine';
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
class App extends Component {
  render() {
    let color = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className="App" >
        <QuotesMachine></QuotesMachine>
      </div>
    );
  }
}

export default App;
