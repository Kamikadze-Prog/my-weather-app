import styles from "./header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div>
          <a
            href={"/"}>
            <Image
              className={styles.logo}
              src={require("../../../assets/images/Logo.svg")}
              alt="Picture of the author"
              width={80}
              height={80}
            />
          </a>
        </div>
        <ul className={styles.navigation}>
          <li>
            Weather
          </li>
          <li>
            Later
          </li>
        </ul>
      </div>
    </header>
  );
}
