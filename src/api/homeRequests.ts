import axios, { AxiosPromise } from "axios";
import api from "../shared/constants/constants";

export const getCity = (name: string): AxiosPromise => {
  const url = api.weatherURL + api.rec.q + name + api.rec.appid + api.apiKey;
  return axios.get(url);
};

export const getForecast = (name: string): AxiosPromise => {
  const url = api.forecastURL + api.rec.q + name + api.rec.appid + api.apiKey;
  return axios.get(url);
};
