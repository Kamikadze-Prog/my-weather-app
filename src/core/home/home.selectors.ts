import { City } from "../../shared/homeTypes/city";
import { CityList } from "../../shared/homeTypes/cityList";

export const getWeatherData = (state: { homeReducer: City }) => state.homeReducer;

export const getForecastData = (state: { forecastReducer: { list: CityList[] } }) => state.forecastReducer;
