import React, {Fragment} from 'react';
import Zoom from 'react-img-zoom';
import magnify from './zoom-in.svg';

const Picture = (props) => {
    // console.log('picture component props', props)
    const {pictureObj} = props

    return (
      <Fragment>
        <div className="solo-pic-display">
          <Zoom
            width={700}
            height={467}
            alt={pictureObj.topic}
            img={pictureObj.image_url}
            zoomScale={2}
            transitionTime={0.2}
          />
          <div className="hover-container">
            <p className="hover-text">Hover over picture to zoom.</p>
            <img className="zoom-icon" src={magnify} alt="" />
          </div>
        </div>
      </Fragment>
    )
  }

export default Picture
