export enum actionTypes {
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_REQUESTED ='LOAD_DATA_REQUESTED',
}

export const findCity = (type: string, city:  string ) => ({
  type:  type,
   text: city
});
