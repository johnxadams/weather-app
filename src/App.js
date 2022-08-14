import React, { useState } from "react";
// url
import { url } from "./api-url";

import axios from "axios";
// styles
import "./App.css";
import "./scss/_layout.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation = (e) => {};
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <section className="weather-info-container">
        <div className="top">
          <div className="location">
            <p>Leipzig</p>
          </div>
          <div className="temperature">
            <h3>50 °C</h3>
          </div>
          <div className="description">
            <p>Sunny Clear</p>
          </div>
        </div>
        <div className="main"></div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            <p>60 °C</p>
          </div>
          <div className="humidity">
            <p>40%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>20 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
