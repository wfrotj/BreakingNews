import KelvinToCelsius from "../utils/KelvinToCelsius";
import TitleCase from "../utils/TitleCase";

function Weather({ data }) {
  const { weather, name, main } = data;
  const { icon, description } = weather[0];

  return (
    <div className="flex flex-row items-center text-black text-lg gap-4">
      <h3 className="text-2xl items-center">{name}</h3>
      <p className="items-center">{KelvinToCelsius(main.temp)}C</p>

      <div className="weather-details flex flex-row items-center">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          className="w-20"
        />
        <p>{TitleCase(description)}</p>
      </div>
    </div>
  );
}

export default Weather;
