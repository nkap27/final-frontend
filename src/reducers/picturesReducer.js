import { ADD_ITEM } from '../types';
import { LOAD_FEATURE_FOLDER } from '../types';

const defaultState = {
  pinnedPictures: [{image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF4025.JPG'}, {image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF4414.JPG'}]
}

const picturesReducer = (state=defaultState, action) => {
  // console.log(action)
  switch (action.type) {
    case ADD_ITEM:
      return {...state, pinnedPictures: [...state.pinnedPictures, action.payload]}
    case LOAD_FEATURE_FOLDER:
      return {...state, featureFolder: action.payload }
    default:
      return state
  }
}

export default picturesReducer
