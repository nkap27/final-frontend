import React from 'react'

const PictureTile = (props) => {
  // console.log(props)

  return (
    <div>
      <img className="item photo" onClick={props.selectPictureId} src={props.image_url} id={props.id} alt={props.topic} />
    </div>
  )
}

export default PictureTile
