import TiledPics from '../components/TiledPics';
import React from 'react';
// import { connect } from 'react-redux';

const AlbumsContainer = (props) => {

  // console.log('props for pins container', props.pics)

  return (
    <div className="pins-container">
      <h3>ALBUM</h3>
      <TiledPics pics={props.pics}/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return { pinnedPics: state.pinnedPictures }
// }

export default AlbumsContainer
