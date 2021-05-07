import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../../../home/home.selectors";
import { CityType } from "../../../../home/home.type";

export default function Weather() {
  const [cityWeather, setCityWeather] = useState<CityType>();
  const cityData = useSelector(getWeatherData);

  useEffect(() => {
    if (!cityData) return;
    setCityWeather(cityData);
  }, [cityData]);

  return (
    <>
      {(cityWeather) &&
      <div>
        City Name: {cityWeather.name} Wind Speed: {cityWeather.wind.speed}
      </div>
      }
    </>
  );
}
