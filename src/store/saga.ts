import { all, fork } from "redux-saga/effects";
import { getCityData, getForecastData } from "../core/home/home.sagas";

export default function* mySaga(): Generator {
  yield all([fork(getCityData), fork(getForecastData)]);
}
