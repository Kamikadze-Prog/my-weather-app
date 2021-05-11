import { actionTypes } from "./home.actions";
import { Home } from "../../shared/homeTypes/home";
import { combineReducers } from "redux";

const CityState = {
  main: {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0
  },
  wind: {
    speed: null
  },
  name: "N/A"
};

function homeReducer(state = CityState, action: Home) {
  switch (action.type) {
    case actionTypes.LOAD_CITY_SUCCEEDED:
      return action.data;
    case actionTypes.LOAD_CITY_FAILED:
      return CityState;
    default:
      return state;
  }
}

function forecastReducer(state = CityState, action: Home) {
  switch (action.type) {
    case actionTypes.LOAD_FORECAST_SUCCEEDED:
      return action.data;
    case actionTypes.LOAD_FORECAST_FAILED:
      return CityState;
    default:
      return state;
  }
}

export default combineReducers({
  forecastReducer, homeReducer
});



