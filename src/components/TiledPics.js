import Picture from './Picture';
import React from 'react'
import uuid from "uuid"

const TiledPics = (props) => {
  // console.log('props.pinnedPics', props.pinnedPics)
  console.log(props)
  const renderPhotos = props.pics.pictures.map(pic => <Picture key={uuid()} {...pic} />)

  return (
    <div className="pic-list">
      { renderPhotos }
    </div>
  )
}

export default TiledPics
