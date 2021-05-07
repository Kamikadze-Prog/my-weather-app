import { CityType } from "../../../core/home/home.type";
import styles from "./weatherCard.module.scss";

export default function WeatherCard(props: { cityWeather: CityType }) {
  const { wind, main, sys } = props.cityWeather;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div>Today</div>

        <div>
          <div><span>Temperature: {main?.temp}</span></div>
          <div><span>TFeels: LIke {main?.feels_like}</span>T</div>
        </div>

        <div><span> Humidity: {main?.humidity}</span></div>
        <div><span> Speed: {wind.speed}</span></div>
        <div><span> H {sys?.country} </span></div>
      </div>
    </div>
  );
}
