import Image from "next/image";
import styles from "./header.module.scss";

const logo = require("../../images/Logo.svg");

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <Image
          className={styles.logo}
          src={logo}
          alt="Picture of the author"
          width={80}
          height={80}
        />
      </div>
      <ul className={styles.navigation}>
        <li>
          Weather
        </li>
        <li>
          Later
        </li>
      </ul>
    </header>
  );
}
