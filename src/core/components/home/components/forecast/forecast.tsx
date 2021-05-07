import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getForecastData } from "../../../../home/home.selectors";
import { CityType } from "../../../../home/home.type";
import styles from "./forecast.module.scss";

export const Forecast = () => {
  const [forecast, setForecast] = useState<CityType>();
  const forecastData = useSelector(getForecastData);

  useEffect(() => {
    if (!forecastData) return;
    setForecast(forecastData);
  }, [forecastData]);


  // const fiveDays = () => {
  //   forecastData.list.map((el, index) => {
  //     return (
  //       <div>
  //
  //       </div>
  //     );
  //   });
  // };
  return (
    <div className={styles.cards}>
      {forecast &&
      <div>
        City cnt: {forecast.cnt} City code: {forecast.cod}
      </div>}
    </div>
  );
};
