import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import "./scss/_layout.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e238de25e3101c15f4fae18685f436a5`;

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
            <p>50 °C</p>
          </div>
          <div className="description">
            <p>Sunny Clear</p>
          </div>
        </div>
        <div className="main"></div>
        <div className="bottom">
          <div className="feels">
            <p>60 °C</p>
          </div>
          <div className="bottom">
            <div className="humidity">
              <p>40%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p>20 km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
