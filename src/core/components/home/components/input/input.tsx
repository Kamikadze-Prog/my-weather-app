import { useDispatch } from "react-redux";
import { useState } from "react";
import { findCityAct, findForecastAct } from "../../../../home/home.actions";
import styles from "./input.module.scss"

export const CustomInput = () => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  function onClickHandler(e: any) {
    if (!cityName) return;
    e.preventDefault();
    dispatch(findCityAct(cityName));
    dispatch(findForecastAct(cityName));
    setCityName("");
  }

  return (
    <div className={styles.inputWrapper}>
      <form className={styles.formWrapper}>
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
    </div>
  );
}
