import React from 'react'

const PictureTile = (props) => {
  // console.log('PIN',props)

  return (
    <div>
      <img className="item photo" src={props.image_url} alt="" />
    </div>
  )
}

export default PictureTile