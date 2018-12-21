import Pins from './Pins';
import React from 'react'
import uuid from "uuid"

const PinsList = (props) => {
  // console.log('props.pinnedPics', props.pinnedPics)

  const renderPhotos = props.pics.map(pic => <Pins key={uuid()} {...pic} />)

  return (
    <div className="pic-list">
      { renderPhotos }
    </div>
  )
}

export default PinsList
