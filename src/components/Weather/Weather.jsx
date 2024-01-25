import KelvinToCelsius from "../utils/KelvinToCelsius";
import TitleCase from "../utils/TitleCase";

function Weather({ data }) {
  const { weather, name, main } = data;
  const { icon, description } = weather[0];

  return (
    <div className="flex flex-row items-center text-black text-lg  laptop:text-2xl tablet:gap-2 mobile:flex">
      <h3 className="items-center">{name}</h3>
      <p className="items-center">{KelvinToCelsius(main.temp)}C</p>

      <div className="weather-details flex flex-row items-center ">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          className="laptop:w-20 tablet:w-8 tablet:h-8 tablet:flex laptop:flex"
        />
        <p className="tablet:flex mobile:hidden laptop:flex">
          {TitleCase(description)}
        </p>
      </div>
    </div>
  );
}

export default Weather;
