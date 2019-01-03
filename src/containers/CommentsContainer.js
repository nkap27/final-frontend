import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';

class CommentsContainer extends React.Component {

  constructor(props){
    super(props)
    this.ApiAdapter = new ApiAdapter()

    this.state = {
      comments: [],
      text: ''
    }
  }

  componentDidMount(){
    this.ApiAdapter.fetchComments().then(data => this.setState({comments: this.findPictureComments(data)}))
  }

  findPictureComments(comments){
    return comments.filter(comment => comment.picture.id === this.props.pictureId)
  }

  displayComments() {
    return this.state.comments.map(comment => {
      if(comment.user.id === this.props.userId){
        return (
          <div className="bubble-container">
            <div className="text-bubble" key={comment.id}>
              <h4 className="guest-author"> {this.props.username} </h4>
              <div className="comment-post"> {comment.text} </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="bubble-container">
            <div className="text-bubble" key={comment.id}>
              <h4 className="admin-author"> photographer </h4>
              <div className="comment-post"> {comment.text} </div>
            </div>
          </div>
        )
      }
    })

  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.ApiAdapter.postComment(this.state.text, this.props.pictureId, this.props.userId)
    .then(data => this.setState({...this.state, comments: [...this.state.comments, data]}))
    e.target.reset();
  }

  render(){
    // console.log('this.props', this.props)
    // console.log('state', this.state)
    // console.log('Clicked photo', this.props)
    // console.log('current pic comments', this.props.pics.currentPicture)
    //the sweet JS syntax par russ

    return (
      <Fragment>
      <div className="comment-form-box">
        <p className="suggestion-text">Got any suggestions? Drop 'em in here!</p>
        <div className="display-comments">
          {this.displayComments()}
        </div>

        <form className="form" onSubmit={this.handleSubmit}>
          <textarea className="textarea" placeholder="Leave A Reply" value={this.state.value} name="text" onChange={this.handleChange} />
          <button className="button" type="submit" value="Submit">COMMENT</button>
        </form>
      </div>

      </Fragment>
    )
  }
}

const mapStateToProps = ({users: { user: {id, username} }}) => ({
  userId: id,
  username
})

export default connect(mapStateToProps)(CommentsContainer)
