import styles from "../../../core/home/components/homeComponent/home.module.scss";

export default function Header() {

  return (
    <header>
      <h1 className={styles.title}>
        Weather Style
      </h1>
    </header>
  );
}
