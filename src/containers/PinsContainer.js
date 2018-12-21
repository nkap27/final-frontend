import PinsList from '../components/PinsList';
import React from 'react';
// import { connect } from 'react-redux';

const PinsContainer = (props) => {

  // console.log('props for pins container', props.pics)

  return (
    <div className="pins-container">
      <h3>ALBUM</h3>
      <PinsList pics={props.pics}/>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return { pinnedPics: state.pinnedPictures }
// }

export default PinsContainer
