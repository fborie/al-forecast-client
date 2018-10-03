import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ForecastView from "./Scenes/ForecastView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ForecastView />
      </div>
    );
  }
}

export default App;
