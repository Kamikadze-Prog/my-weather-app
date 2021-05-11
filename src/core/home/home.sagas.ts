import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./home.actions";
import { HomeState } from "./home.state";
import { getCity, getForecast } from "../../api/homeRequests";

export function* getCityData(): Generator {
  yield takeEvery(actionTypes.LOAD_CITY, function* (action: HomeState) {
    try {
      const { data } = yield call(getCity, action.name);
      yield put({ type: actionTypes.LOAD_CITY_SUCCEEDED, data });
    } catch (error) {
      yield put({ type: actionTypes.LOAD_CITY_FAILED, error });
    }
  });
}

export function* getForecastData(): Generator {
  yield takeEvery(actionTypes.LOAD_FORECAST, function* (action: HomeState) {
    try {
      const { data } = yield call(getForecast, action.name);
      yield put({ type: actionTypes.LOAD_FORECAST_SUCCEEDED, data });
    } catch (error) {
      yield put({ type: actionTypes.LOAD_FORECAST_FAILED, list: { error } });
    }
  });
}
