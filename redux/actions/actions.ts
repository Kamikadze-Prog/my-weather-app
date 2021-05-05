export const actionTypes = {
  FAILURE: 'FAILURE',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  HYDRATE: 'HYDRATE',
}

export function failure(error: any) {
  return {
    type: actionTypes.FAILURE,
    error,
  }
}

export function reset() {
  return { type: actionTypes.RESET }
}

export function loadData() {
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  }
}

