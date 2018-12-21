import React from 'react'
import { connect } from 'react-redux';

const FeaturePhoto = (props) => {

  const handleOnClick = (event) => {
    // console.log('clicked',props.image_url)
    // console.log('pinnedPics', props.pinnedPics.map(pin => Object.values(pin)).join(', ').split(" "))
    const currentPins = props.pinnedPics.map(pin => Object.values(pin)).join(', ').split(" ")

    if(!currentPins.includes(props.image_url)){
      props.pinItem(props.image_url)
    }
  }

  return (
    <div>
      <img className="item photo" src={props.image_url} alt="" />
      <button onClick={handleOnClick}>Heart</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pinnedPics: state.pinnedPictures
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pinItem: (image_url) => {
      dispatch({ type: 'ADD_ITEM', payload: {image_url} })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturePhoto)
