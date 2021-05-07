import { actionTypes } from "../actions/actions";
import { CityReducerType } from "../../../shared/intersfaces/interfaces";

const InitialState =
  {
    cod: 'N/A',
    message: null,
    cnt: null,
    list: [
      {
        dt: null,
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

    city: {
      id: 0,
      name: 'N/A',
      coord: {
        lat: null,
        lon: null,
      },
      country: 'N/A',
      population: null,
      timezone: null,
      sunrise: null,
      sunset: null,
    },
    error: null

  }

function forecastReducer(state = InitialState, action: CityReducerType) {
  switch (action.type) {
    case actionTypes.LOAD_FORECAST_SUCCEEDED:
      return action.data;
    case actionTypes.LOAD_FORECAST_FAILED:
      return InitialState;
    default:
      return state;
  }
}
export default forecastReducer;
