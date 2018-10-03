import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ForecastView from "./Scenes/ForecastView";
import cities from './Utils/cities';

import { startChannel } from './Utils/ApiHelper';

class App extends Component {

  componentDidMount(){
    startChannel();
  }

  render() {
    return (
      <div className="App">
        <ForecastView cities={cities}/>
      </div>
    );
  }
}

export default App;
