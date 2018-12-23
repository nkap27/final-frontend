import TiledPics from '../components/TiledPics';
import React from 'react';
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';
import { LOAD_FEATURE_FOLDER } from '../types';
import store from '../store'

class Feature extends React.Component{

  constructor(props) {
    super(props)
    this.ApiAdapter = new ApiAdapter()
  }

  componentDidMount() {
    this.ApiAdapter.loadFeatureFolder()
    .then(data => {
      store.dispatch({
        type: LOAD_FEATURE_FOLDER,
        payload: data.folder
      })
    })
  }

  render() {
    return (
        <div>
          <h3>FEATURE CONTAINER</h3>
          { this.props.featureFolder ? <TiledPics className="container" pics={this.props.featureFolder} /> : null }
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  // console.log('state', state)
  return { featureFolder: state.pics.featureFolder }
}

export default connect(mapStateToProps)(Feature)
