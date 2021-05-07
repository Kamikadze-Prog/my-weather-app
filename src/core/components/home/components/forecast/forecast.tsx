import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getForecastData } from "../../../../home/home.selectors";

export default function Forecast() {
  const [forecast, setForecast] = useState();
  const forecastData = useSelector(getForecastData);

  useEffect(() => {
    if (!forecastData) return;
    setForecast(forecastData);
  }, [forecastData]);

  return (
    <>
      {forecast &&
      <div>
        City cnt: {forecast.cnt} City code: {forecast.cod}
      </div>}
    </>
  );
}
