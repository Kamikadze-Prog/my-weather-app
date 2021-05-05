import { actionTypes } from '../actions/actions'

function reducer(state: [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_DATA_REQUESTED:
      return action.data;

    default:
      return state
  }
}

export default reducer
