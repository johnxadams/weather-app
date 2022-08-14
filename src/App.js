import React, { useState } from "react";
// url
import { apiKey } from "./api-key";

//librabries
import axios from "axios";

// styles
import "./App.css";
import "./scss/_layout.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const current = new Date();
  const date = `${current.getDate()} ${current.getMonth() + 1}`;
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={handleChange}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <section className="weather-info-container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temperature">
            {data.main && <h3>{data.main.temp}°</h3>}
          </div>
          <div className="description">
            <p>Sunny Clear</p>
          </div>
        </div>
        {data.name && (
          <>
            <div className="main">
              <p> Today {date}</p>
            </div>
            <div className="bottom">
              <div className="feels">
                <p>Feels Like</p>
                <p>60 °C</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p>20 km/h</p>
                <p>Wind Speed</p>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default App;
