import { combineReducers } from 'redux';
import users from './usersReducer';
import pins from './pinsReducer';

export default combineReducers({
  users,
  pins
})
