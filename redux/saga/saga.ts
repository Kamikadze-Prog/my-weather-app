import { all, fork, put, take } from "redux-saga/effects";
import { actionTypes } from "../actions/actions";
import axios from "axios";
import api from "../../api/api";

function* actionWatcher() {
  yield take(actionTypes.LOAD_DATA_SUCCESS);
  const { data } = yield axios.get(`${api.baseURL}?q=${`Sydney`}&APPID=${api.apiKey}`);
  console.log(data);
  yield put({ type: actionTypes.LOAD_DATA_REQUESTED, data });
}

export default function* mySaga(): Generator {
  yield all([fork(actionWatcher)]);
}

