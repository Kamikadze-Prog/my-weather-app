import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../actions/actions";
import { CityActType } from "../../shared/intersfaces/interfaces";
import { getCity } from "../../api/api";

function* actionWatcher(): Generator {
  yield takeEvery(actionTypes.LOAD_DATA, function* (action: CityActType) {
    try {
      const { data } = yield call(()=> getCity(action.name));
      yield put({ type: actionTypes.LOAD_DATA_SUCCEEDED, data });

    } catch (error) {
      yield put({ type: actionTypes.LOAD_DATA_FAILED, error });
    }
     // yield getData(getForecast(action.name), actionTypes.LOAD_DATA_FORECAST_SUCCEEDED);
  });

}

export default function* mySaga(): Generator {
  yield all([fork(actionWatcher)]);
}

