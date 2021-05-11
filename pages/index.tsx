import styles from "../src/core/home/components/homeComponent/home.module.scss";
import { CustomInput } from "../src/shared/components/inputForm/inputForm";
import { Weather } from "../src/core/components/home/components/weather/weather";
import { Forecast } from "../src/core/components/home/components/forecast/forecast";
import Layout from "../src/shared/layout/Layout";

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
