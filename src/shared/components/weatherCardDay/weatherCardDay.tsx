import { fixNumber } from "../../helpers/fixNumber";
import { CityList } from "../../homeTypes/cityList";
import styles from "./weatherCardDay.module.scss";
import { getHour } from "../../helpers/hetHour";

export default function WeatherCardDay(props: { item: CityList }) {
  const {item} = props
  const { wind, main, dt_txt, weather } = item;

  function getCloudsImg(description: string) {
    let logo = "";
    switch (description) {
      case "clear sky":
        logo = require("../../images/clearSky.svg");
        break;
      case "broken clouds":
        logo = require("../../images/brokenClouds.svg");
        break;
      case "light rain":
        logo = require("../../images/ligthRain.svg");
        break;
      case "overcast clouds":
        logo = require("../../images/overcastClouds.svg");
        break;
      case "few clouds":
        logo = require("../../images/fewClouds.svg");
        break;
      case "scattered clouds":
        logo = require("../../images/scatteredClouds.svg");
        break;
    }
    return (
      <img src={logo} alt={logo} width={30} height={30} />
    );
  }
  return (
    <div className={styles.cardDayWrapper}>
      <div className={styles.time}>
        <span>Time {getHour(dt_txt)}</span>
      </div>
      <div className={styles.sky}>
        {getCloudsImg(weather[0].description)}
      </div>
      <div className={styles.humidity}>
        <span> Humidity: {main?.humidity}</span>
      </div>
      <div className={styles.wind}>
        <span> Speed: {fixNumber(wind.speed)}</span>
      </div>
      <div className={styles.temperature}>
        <div>
          <img src={require("../../images/temperature.svg")} alt="temp" width={30} height={30} />
        </div>
        <div>
          {fixNumber(main?.temp)}
        </div>
      </div>
    </div>
  );
}
