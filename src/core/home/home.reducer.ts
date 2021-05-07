import { actionTypes } from './home.actions'
import { HomeType } from "./home.type";
import { combineReducers } from "redux";

const CityState = {
  coord: {
    lon: 0,
    lat: 0
  },
  weather: [
    {
      id: 0,
      main: 'N/A',
      description: 'N/A',
      icon: 'N/A'
    }
  ],
  base: 'N/A',
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0
  },
  visibility: 0,
  wind: {
    speed: null,
    deg: 0
  },
  id: 0,
  name: 'N/A',
  cod: 0,

  list: [
    {
      main: {
        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        pressure: null,
        sea_level: null,
        grnd_level: null,
        humidity: null,
        temp_kf: null,
      },
      weather: [
        {
          id: null,
          main: 'N/A',
          description: 'N/A',
          icon: 'N/A'
        }
      ],
      clouds: {
        all: null,
      },
      wind: {
        speed: null,
        deg: null,
        gust: null
      },
      visibility: null,
      pop: null,
      sys: {
        pod: 'N/A',
      },
      dt_txt: 'N/A',
    }
  ],
  error: ''
}

function homeReducer(state = CityState, action: HomeType) {
  switch (action.type) {
    case actionTypes.LOAD_CITY_SUCCEEDED:
      return action.data;

    case actionTypes.LOAD_CITY_FAILED:
      return CityState;
    default:
      return state
  }
}

function forecastReducer(state = CityState, action: HomeType) {
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



