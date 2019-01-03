import { combineReducers } from 'redux';
import users from './usersReducer';
import pics from './picturesReducer';

export default combineReducers({
  users,
  pics
})
