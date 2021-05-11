export enum actionTypes {
  LOAD_CITY = "LOAD_DATA",
  LOAD_CITY_SUCCEEDED = "LOAD_DATA_SUCCEEDED",
  LOAD_CITY_FAILED = "LOAD_DATA_FAILED",

  LOAD_FORECAST = "LOAD_FORECAST",
  LOAD_FORECAST_SUCCEEDED = "LOAD_DATA_FORECAST_SUCCEEDED",
  LOAD_FORECAST_FAILED = "LOAD_DATA_FORECAST_FAILED",
}

export const findCityAct = (city: string) => ({
  type: actionTypes.LOAD_CITY,
  name: city
});

export const findForecastAct = (city: string) => ({
  type: actionTypes.LOAD_FORECAST,
  name: city
});
