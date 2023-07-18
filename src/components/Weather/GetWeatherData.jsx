import { useState, useEffect } from "react";
import Weather from "./Weather";

function GetWeatherData() {
  const [data, setData] = useState(null);
  async function weatherData() {
    try {
      const response = await fetch("http://localhost:1114/weather");
      const weatherData = await response.json();

      setData(weatherData);
    } catch (error) {
      console.error(error);
      setData(null); // set data to null if there's an error
    }
  }
  useEffect(() => {
    weatherData();
  }, []);
  if (data === null) {
    return <h1>Loading weather.</h1>;
  }
  return (
    <div>
      <Weather data={data} />
    </div>
  );
}

export default GetWeatherData;
