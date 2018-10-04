import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ForecastView from "./Scenes/ForecastView";
//import cities from './Utils/cities';

import { startUpdateChannel } from './Utils/ApiHelper';

const cities = [
  {
      name: "santiago",
      country: "Chile",
      timezone: "America/Santiago",
      temperature: 72
  },
  {
      name: "zurich",
      country: "Suiza",
      timezone: "Europe/Zurich",
      temperature: 65,
  },
  {
      name: "auckland",
      country: "Nueva Zelanda",
      timezone: "Pacific/Auckland",
      temperature: 60,
  },
  {
      name: "sydney",
      country: "Australia",
      timezone: "Australia/Sydney",
      temperature: 65
  },
  {
      name: "londres",
      country: "Inglaterra",
      timezone: "Europe/London",
      temperature: 45,
  },
  {
      name: "atlanta",
      country: "Estados Unidos de America",
      timezone: "America/New_York",
      temperature: 50,
  }
  ]
class App extends Component {

  constructor(){
    super();
    this.state = { cities: [] };
    this.updateCities = this.updateCities.bind(this);
  }

  updateCities(cities){
    this.setState({cities: cities});
  }

  componentDidMount(){
    startUpdateChannel(this.updateCities);
  }

  render() {
    return (
      <div className="App">
        <ForecastView cities={this.state.cities}/>
      </div>
    );
  }
}

export default App;
