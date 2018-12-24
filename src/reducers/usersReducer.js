import { SET_CURRENT_USER } from '../types';

const initialState = {
  user: null
}

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
    // console.log(action.payload)
      return {...state, user: action.payload }
    default:
      return state
  }
}

export default usersReducer;
