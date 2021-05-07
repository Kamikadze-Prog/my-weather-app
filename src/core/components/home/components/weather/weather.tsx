import { useEffect, useState } from "react";
import { CityType } from "../../../../../shared/intersfaces/cityTypes";
import { useSelector } from "react-redux";
import { getWeatherData } from "../../../../home/home.selectors";

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
