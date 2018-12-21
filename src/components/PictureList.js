import FeaturePhoto from './FeaturePhoto';
import React from 'react';
import uuid from "uuid";

const PictureList = (props) => {
  console.log('picture list object', props.featuredPics)

  const renderFeaturedPhotos = props.featuredPics.map(featuredPic => <FeaturePhoto className="container" key={uuid()} {...featuredPic} />)

  return (
    <div>
      {renderFeaturedPhotos}
    </div>
  )
}

export default PictureList
