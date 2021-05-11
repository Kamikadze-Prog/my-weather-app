import styles from "./weatherCard.module.scss";
import { fixNumber } from "../../helpers/fixNumber";
import { City } from "../../homeTypes/city";

interface WeatherCardProps {
  cityWeather: City
}

export default function WeatherCard(props: WeatherCardProps) {
  const { cityWeather } = props;
  const { wind, main, sys } = cityWeather;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.dayTitle}>Today</div>
        <div className={styles.temperature}>
          <div>Temperature: {fixNumber(main?.temp)}</div>
          <div>Feels: LIke {main?.feels_like}</div>
        </div>
        <div>Humidity: {main?.humidity}</div>
        <div className={styles.skySpeed}>
          <div> Speed: {wind.speed}</div>
          <div> Region: {sys?.country} </div>
        </div>
      </div>
    </div>
  );
}
