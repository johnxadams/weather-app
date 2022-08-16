import React, { useState } from "react";

// data
import { apiKey } from "./api-key";
import { monthData } from "./data";

//librabries
import axios from "axios";

// styles
import "./App.css";
import "./scss/_layout.scss";

//icons
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(" url1 ", response.data);
      });
      setLocation("");
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  // get date
  const current = new Date();
  const currentUTC = current.toUTCString();
  const date = `${current.getUTCDate()} ${
    monthData[current.getUTCMonth() + 1]
  }`;
  const time = current.toUTCString();
  const timeHours = parseInt(time.slice(-12, -10));
  const timezoneOffsetHours = data.timezone / 3600;
  const foreignTimezoneHour = timeHours + timezoneOffsetHours;
  const worldClock = foreignTimezoneHour.toString() + time.slice(-10, -7);
  console.log("time ", time);
  console.log("timeHours as a number ", timeHours);
  console.log("timezoneOffsetHours: ", timezoneOffsetHours);
  // console.log("newTimeHour", foreignTimezoneHour);
  console.log("worldClock: ", worldClock);

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

          {data.name && (
            <div className="temperature">
              {data.main && <h3>{Math.floor(data.main.temp)}°</h3>}
              <div className="description">
                {data.weather && <p>{data.weather[0].main}</p>}
              </div>
            </div>
          )}
        </div>
        {data.name && (
          <>
            <div className="main">
              <p> Today, {date}</p>
            </div>
            <div className="bottom">
              <div className="feels">
                {data.main && <p>{Math.floor(data.main.feels_like)}°</p>}
                <div className="wi-bottom">
                  <WiThermometer />
                </div>
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <div className="wi-bottom">
                  <WiHumidity />
                </div>
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind && <p>{Math.floor(data.wind.speed)} km/h</p>}
                <div className="wi-bottom">
                  <WiStrongWind />
                </div>
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
