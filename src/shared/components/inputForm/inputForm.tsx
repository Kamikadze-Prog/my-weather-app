import { useDispatch } from "react-redux";
import { useState } from "react";
import { findCityAct, findForecastAct } from "../../../core/home/home.actions";
import { Button, Input} from '@material-ui/core';
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
        <Input
          className={styles.MuiInputBase}
          type="text"
          placeholder="Enter city"
          value={cityName}
          onChange={(event) => {
            setCityName(event.target.value);
          }}
        />
        <Button color={"primary"} variant={"contained"} type={"button"}>Find City</Button>
      </form>
    </div>
  );
};
