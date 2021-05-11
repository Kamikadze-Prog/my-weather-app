import { useSelector } from "react-redux";
import { getForecastData } from "../../../../home/home.selectors";
import styles from "./forecast.module.scss";
import WeatherCardDay from "../../../../../shared/components/weatherCardDay/weatherCardDay";
import { CityList } from "../../../../../shared/homeTypes/cityList";
import { gatDate } from "../../../../../shared/helpers/getDate";

export const Forecast = () => {
  const forecastData = useSelector(getForecastData);
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function fiveDays() {
    return forecastData.list.map((item: CityList, index: number) => (
        (gatDate(item.dt_txt).getHours() !== 0) ?
          <WeatherCardDay key={index.toString()} item={item} /> :
          <div className={styles.daysWrapper} key={index.toFixed()}>
            <div className={styles.weekDay}>{days[gatDate(item.dt_txt).getDay()]}</div>
            <WeatherCardDay item={item} />
          </div>
      )
    );
  }

  if (forecastData.list === undefined)
    return (
      <div className={styles.errorWrapper}>Write correct city name to show Weather</div>
    )
  return (
    <div className={styles.cards}>
      <div className={styles.dayWrapper}>
        {fiveDays()}
      </div>
    </div>
  );
};
