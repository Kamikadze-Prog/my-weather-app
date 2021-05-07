import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getForecastData } from "../../../../home/home.selectors";
import { CityType } from "../../../../home/home.type";

export default function Forecast() {
                                          /*ANY*/
  const [forecast, setForecast] = useState<CityType>();
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
