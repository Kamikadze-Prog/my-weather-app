import styles from "../src/core/home/components/homeComponent/home.module.scss";
import InputCity from "../src/core/components/home/components/input/inpyt";
import Weather from "../src/core/components/home/components/weather/weather";
import Forecast from "../src/core/components/home/components/forecast/forecast";
import Layout from "../src/shared/components/Loyout";

export default function Home() {
  return (
    <Layout home>
      <div className={styles.container}>
      <main className={styles.main}>
        <InputCity />
        <Weather />
        <Forecast />
      </main>
    </div>
    </Layout>
  );
}
