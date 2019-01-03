import React from 'react';
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';
import { LOAD_FEATURE_FOLDER } from '../types';
import store from '../store'
import PictureTile from './PictureTile';
import uuid from "uuid"

class Feature extends React.Component{

  constructor(props) {
    super(props)
    this.ApiAdapter = new ApiAdapter()

    this.state = {
      pictureId: null
    }
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

  renderPhotos = () => {
    // console.log('props.pinnedPics', props.pinnedPics)
    // console.log(this.props)
    const featurePics = this.props.featureFolder.pictures.map(picture => (
      <div>
        <PictureTile
          {...picture}
          key={uuid()}
        />
        <div id={picture.id} onClick={this.selectPictureId}>Like</div>
      </div>
    ))

    return (
      <div className="pic-list">
        { featurePics }
      </div>
    )
  }

  selectPictureId = (event) => {
    this.ApiAdapter.postPin(this.props.userId, event.target.id)
    // .then(console.log)
  }

  render() {
    console.log(this.props)
    return (
        <div>
          <div className="feature-textbox">
            <h1>Feature</h1>
            <h4>The latest photos from your photographer.</h4>
          </div>
          { this.props.featureFolder ? this.renderPhotos() : null }
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return { featureFolder: state.pics.featureFolder, userId: state.users.user.id }
}

export default connect(mapStateToProps)(Feature)
