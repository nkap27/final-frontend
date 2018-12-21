import { SET_CURRENT_USER } from '../types';

const initialState = {
  user: null
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.payload.user }
    default:
      return state
  }
}

export default usersReducer;
