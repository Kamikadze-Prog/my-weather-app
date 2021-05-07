import { CityType } from "./home.type";

export const getWeatherData = (state: { homeReducer: CityType }) => state.homeReducer;

export const getForecastData = (state: { forecastReducer: any }) => state.forecastReducer;
