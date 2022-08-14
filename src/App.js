import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import "./scss/_layout.scss";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e238de25e3101c15f4fae18685f436a5`;

  return (
    <div className="App">
      ONe
      <h3>Blue</h3>
    </div>
  );
}

export default App;
