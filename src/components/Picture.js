import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';
import store from '../store';
import { LOAD_COMMENTS } from '../types';
import Zoom from 'react-img-zoom';
import CommentsContainer from '../containers/CommentsContainer';

class Picture extends React.Component{

  constructor(props){
    super(props)
    this.ApiAdapter = new ApiAdapter()
  }

  componentDidMount(){
    //NEXT STEPS: STORE.DISPATCH()
    this.ApiAdapter.fetchPicture(this.props.pictureObj.id).then(data => {
      store.dispatch({
        type: LOAD_COMMENTS,
        payload: data.picture.comments
      })
    })
  }

  render(){
    // console.log('Clicked photo', this.props)
    // console.log('current pic comments', this.props.pics.currentPicture)
    //the sweet JS syntax par russ

    const {pictureObj} = this.props

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
        </div>
        <CommentsContainer />
      </Fragment>
    )
  }
}

const mapStateToProps = ({users: { user: {id} }, pics: { pictureComments} }) => ({
  userId: id,
  pictureComments
})


export default connect(mapStateToProps)(Picture)
