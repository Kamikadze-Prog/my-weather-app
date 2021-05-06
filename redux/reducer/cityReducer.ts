import { actionTypes } from '../actions/actions'

function cityReducer(state: [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCEEDED:
      return action.data;

    default:
      return state
  }
}

export default cityReducer
