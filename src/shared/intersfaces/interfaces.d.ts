import { CityType } from "./cityTypes";

interface CityActType {
  type: string,
  name: string
}

interface CityReducerType {
  data: CityType,
  error: string,
  type: string
}
