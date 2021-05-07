import { actionTypes } from '../actions/actions'
import { CityReducerType } from "../../../shared/intersfaces/interfaces";

const InitialState = {
  coord: {
    lon: 0,
    lat: 0
  },
  weather: [
    {
      id: 0,
      main: 'N/A',
      description: 'N/A',
      icon: ''
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
  clouds: {
    all: 0
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: 'N/A',
    sunrise: 0,
    sunset: 0
  },
  timezone: 0,
  id: 0,
  name: null,
  cod: 0,
  error: null
}

function cityReducer(state = InitialState, action: CityReducerType) {
  switch (action.type) {
    case actionTypes.LOAD_CITY_SUCCEEDED:
      return action.data;

    case actionTypes.LOAD_CITY_FAILED:
      return InitialState;
    default:
      return state
  }
}

export default cityReducer
