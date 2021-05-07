import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getCity, getForecast } from "../../../api/homeRequests";
import { actionTypes } from "../actions/actions";
import { CityActType } from "../../../shared/intersfaces/interfaces";


function* getCityData(): Generator {
  yield takeEvery(actionTypes.LOAD_CITY, function* (action: CityActType) {
    try {
      const { data } = yield call(()=> getCity(action.name));
      yield put({ type: actionTypes.LOAD_CITY_SUCCEEDED, data });

    } catch (error) {
      yield put({ type: actionTypes.LOAD_CITY_FAILED, error });
    }
   });
}

function* getForecastData(): Generator {
  yield takeEvery(actionTypes.LOAD_FORECAST, function* (action: CityActType) {
    try {
      const { data } = yield call(()=> getForecast(action.name));
      yield put({ type: actionTypes.LOAD_FORECAST_SUCCEEDED, data });

    } catch (error) {
      yield put({ type: actionTypes.LOAD_FORECAST_FAILED, error });
    }
   });
}

export default function* mySaga(): Generator {
  yield all([fork(getCityData), fork(getForecastData)]);
}

