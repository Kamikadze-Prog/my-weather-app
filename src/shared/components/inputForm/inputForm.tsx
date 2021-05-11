import { useDispatch } from "react-redux";
import { useState } from "react";
import { findCityAct, findForecastAct } from "../../../core/home/home.actions";
import styles from "./input.Form.module.scss";

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
      <form className={styles.formWrapper} onSubmit={onClickHandler}>
        <input
          type="text"
          placeholder="Enter city"
          value={cityName}
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />
        <button type={"button"}>Find City</button>
      </form>
    </div>
  );
};
