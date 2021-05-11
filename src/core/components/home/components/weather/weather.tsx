import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../../../home/home.selectors";
import WeatherCard from "../../../../../shared/components/weatherCard/weatherCard";
import styles from "./weather.module.scss";
import { City } from "../../../../../shared/homeTypes/city";

export const Weather = () => {
  const [cityWeather, setCityWeather] = useState<City>();
  const cityData = useSelector(getWeatherData);

  useEffect(() => {
    if (!cityData) return;
    setCityWeather(cityData);
  }, [cityData]);

  return (
    <>
      {cityWeather &&
      <>
        <div className={styles.cityWeather}>
          Weather for city ({cityWeather.name})
        </div>
        <WeatherCard cityWeather={cityWeather} />
      </>
      }
    </>
  );
};
