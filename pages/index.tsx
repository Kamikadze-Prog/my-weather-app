import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.scss";
import { CityType } from "../shared/intersfaces/cityTypes";
import { findCityAct } from "../redux/actions/actions";

export default function Home() {
  const dispatch = useDispatch();
  const [cityWeather, setCityWeather] = useState<CityType>();
  const [cityName, setCityName] = useState("");
  const cityData = useSelector((state: { cityReducer: CityType }) => state.cityReducer);
  const forecastData = useSelector((state: { forecastReducer: any }) => state.forecastReducer);


  useEffect(() => {
    if (!cityData) return;
    setCityWeather(cityData);
  }, [cityData]);

  function onClickHandler(e: any) {
    if (!cityName) return;
    e.preventDefault();
    dispatch(findCityAct(cityName));
    setCityName("");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Style</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Weather for City
        </h1>
        <form>
          <input
            type="text"
            placeholder="Enter city"
            value={cityName}
            onChange={(event) => {
              setCityName(event.target.value);
            }}
          />
          <button onClick={onClickHandler} type="submit">
            Find City
          </button>
        </form>
        {(cityWeather) &&
        <div>
          City Name: {cityWeather.name} Wind Speed: {cityWeather.wind.speed}
        </div>
        }
        {forecastData &&
        <div>
          City cnt: {forecastData.cnt} City code: {forecastData.cod}
        </div>}

      </main>

      <footer className={styles.footer}>
        <div> Owned by Kamikadze</div>
      </footer>
    </div>
  );
}
