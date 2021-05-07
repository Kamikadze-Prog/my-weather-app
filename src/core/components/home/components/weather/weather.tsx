import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../../../home/home.selectors";
import { CityType } from "../../../../home/home.type";
import WeatherCard from "../../../../../shared/components/weatherCards/weatherCard";

export const Weather = () => {
  const [cityWeather, setCityWeather] = useState<CityType>();
  const cityData = useSelector(getWeatherData);

  useEffect(() => {
    if (!cityData) return;
    setCityWeather(cityData);
  }, [cityData]);

  return (
    <>
      {(cityWeather) &&
      <>
        <div>
          Weather for city ({cityWeather.name})
        </div>
        <WeatherCard cityWeather={cityWeather} />
      </>
      }
    </>
  );
};
