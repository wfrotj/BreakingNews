import { useState, useEffect } from "react";
import Weather from "./Weather";

function GetWeatherData() {
  const [data, setData] = useState(null);
  async function weatherData() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=e4de4a2dfe4265fb34a5c94c75d7813b"
      );
      const weatherData = await response.json();
      console.log(weatherData);
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
