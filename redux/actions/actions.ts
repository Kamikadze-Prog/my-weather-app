
export enum actionTypes {
  LOAD_DATA = "LOAD_DATA",
  LOAD_DATA_SUCCEEDED = "LOAD_DATA_SUCCEEDED",
  LOAD_DATA_FAILED = "LOAD_DATA_FAILED",

  LOAD_DATA_FORECAST_SUCCEEDED = "LOAD_DATA_FORECAST_SUCCEEDED",
  LOAD_DATA_FORECAST_FAILED = "LOAD_DATA_FORECAST_FAILED",
 }

export const findCityAct = (city: string) => {
   return {
  type: actionTypes.LOAD_DATA,
  name: city
}};
