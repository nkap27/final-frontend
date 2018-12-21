import React from 'react'

const Pins = (props) => {
  console.log('PIN',props)

  return (
    <div>
      <img className="item photo" src={props.image_url} alt="" />
    </div>
  )
}

export default Pins
