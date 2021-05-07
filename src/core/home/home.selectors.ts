import { CityType } from "../../shared/intersfaces/cityTypes";

export const getWeatherData = (state: { cityReducer: CityType }) => state.cityReducer;

export const getForecastData = (state: { forecastReducer: any }) => state.forecastReducer;
