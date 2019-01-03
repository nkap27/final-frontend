import React, { Fragment } from 'react';
import Headline from '../components/Headline'
import Feature from '../components/Feature'
import About from '../components/About'

const HomeContainer = () => {
  return (
    <Fragment>
      <Headline />
      <Feature />
      <About />
    </Fragment>
  )
}

export default HomeContainer
