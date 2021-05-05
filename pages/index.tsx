import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { actionTypes } from "../redux/actions/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const [cityWeather, setCityWeather] = useState<CityType[]>();
  const [city, setCity] = useState('')
  const reducer = useSelector((state: { reducer: CityType[] }) => state);

  useEffect(() => {
    dispatch({ type: actionTypes.LOAD_DATA_SUCCESS, city });
  }, [city]);

  useEffect(() => {
    if (reducer) {
      setCityWeather(reducer);
    }
  }, [reducer]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next TypeScript App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Weather for City
        </h1>
        <input type={`text`} placeholder={`Enter city`} onChange={(event)=> {setCity(event.target.value)}}/>
        {cityWeather &&
        <div> City Name: {cityWeather.name} Wind Speed: {cityWeather.wind.speed}
        </div>}
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/Kamikadze-Prog" target="_blank" rel="Develop by kamikadze">Powered by Kamikadze</a>
      </footer>
    </div>
  );
}
