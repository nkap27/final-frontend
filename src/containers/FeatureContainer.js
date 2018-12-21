import PictureList from '../components/PictureList';
import React from 'react';
import { connect } from 'react-redux';

const FeatureContainer = ({ featuredPics }) => {
  // console.log(featuredPics)
  return (
    <div>
      <h3>FEATURE CONTAINER</h3>
      <PictureList className="container" featuredPics={featuredPics} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { featuredPics: state.allFeaturedPics }
}

export default connect(mapStateToProps)(FeatureContainer)
