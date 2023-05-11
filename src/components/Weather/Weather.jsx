import KelvinToCelsius from "../utils/KelvinToCelsius";
import TitleCase from "../utils/TitleCase";
import "./Weather.css";

function Weather({ data }) {
  const { weather, name, main } = data;
  const { icon, description } = weather[0];

  return (
    <div className="weatherforecast">
      <h3>
        {name} {KelvinToCelsius(main.temp)}C
      </h3>
      <div className="weather-details">
        <img src={`http://openweathermap.org/img/w/${icon}.png`} />
        <p>{TitleCase(description)}</p>
      </div>
    </div>
  );
}

export default Weather;
