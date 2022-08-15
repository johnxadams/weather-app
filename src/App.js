import React, { useState } from "react";
// data
import { apiKey } from "./api-key";
import { monthData } from "./data";

//librabries
import axios from "axios";

// styles
import "./App.css";
import "./scss/_layout.scss";

function App() {
  const [data, setData] = useState({});
  const [hourlyData, setHourlyData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(" url1 ", response.data);
      });
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const current = new Date();
  const date = `${current.getDate()} ${monthData[current.getMonth() + 1]}`;

  const dateToTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

  const dateString = "2019-05-05T10:30:00Z";
  const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(dateString);
  const utcDate = new Date(localDate.getTime() + userOffset);

  // console.log(
  //   `This is time: ${dateToTime(utcDate)} (${dateToTime(localDate)} Your Time)`
  // );

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
            {/* <p>{data.id}</p> */}
          </div>
          <div className="temperature">
            {data.main && <h3>{data.main.temp}°</h3>}
          </div>
          {data.name && (
            <div className="description">
              {data.weather && <p>{data.weather[0].main}</p>}
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
                {data.main && <p> {data.main.feels_like}°</p>}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
                {data.main ? (
                  <p className="bold">{data.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.wind && <p>{data.wind.speed} km/h</p>}
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
