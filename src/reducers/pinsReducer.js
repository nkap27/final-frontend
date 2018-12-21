import { ADD_ITEM } from '../types';

const defaultState = {
  allFeaturedPics: [{image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF3838.JPG', name: 'Bolivia', featured: false}, {name: 'Bolivia', image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF3873.JPG', featured: true}],
  pinnedPictures: [{image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF4025.JPG'}, {image_url: 'https://s3.ca-central-1.amazonaws.com/crushproject/DSCF4414.JPG'}]
}

const pinsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, pinnedPictures: [...state.pinnedPictures, action.payload]}
    default:
      return state
  }
}

export default pinsReducer
