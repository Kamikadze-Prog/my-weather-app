import { CityList } from "./cityList";

export interface City {
  coord?: Coords,
  weather?: [Weather],
  base?: string,
  main: Main,
  visibility?: number,
  wind: Wind,
  clouds?: Clouds,
  dt?: number,
  sys?: Sys,
  timezone?: number,
  cnt: number,
  id: number,
  name: string,
  cod?: number,
  error?: string,
  list?: CityList[],
}
