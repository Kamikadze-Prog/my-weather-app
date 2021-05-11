import axios, { AxiosPromise } from "axios";
import api from "../shared/constants/constants";

export const getCity = (name: string): AxiosPromise => {
  const url = api.weatherURL + api.request.city + name + api.request.key + api.apiKey + api.request.temp + api.metric;
  return axios.get(url);
};

export const getForecast = (name: string): AxiosPromise => {
  const url = api.forecastURL + api.request.city + name + api.request.key + api.apiKey + api.request.temp + api.metric;
  return axios.get(url);
};
