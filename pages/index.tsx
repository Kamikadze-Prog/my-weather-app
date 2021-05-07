import styles from "../src/core/home/components/homeComponent/home.module.scss";
import { CustomInput } from "../src/core/components/home/components/input/input";
import { Weather } from "../src/core/components/home/components/weather/weather";
import { Forecast } from "../src/core/components/home/components/forecast/forecast";
import Layout from "../src/shared/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <CustomInput />
        <Weather />
        <Forecast />
      </main>
    </Layout>
  );
}
