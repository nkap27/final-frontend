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
          <div key={comment.id}>
            <div> {this.props.username} </div>
            <div> {comment.text} </div>
          </div>
        )
      } else {
        return (
          <div key={comment.id}>
            <div> Natasha </div>
            <div> {comment.text} </div>
          </div>
        )
      }
    })

  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.ApiAdapter.postComment(this.state.text, this.props.pictureId, this.props.userId)
    .then(data => this.setState({text: '', comments: [...this.state.comments, data]}) )
  }

  render(){
    // console.log('this.props', this.props)
    // console.log('state', this.state)
    // console.log('Clicked photo', this.props)
    // console.log('current pic comments', this.props.pics.currentPicture)
    //the sweet JS syntax par russ

    return (
      <Fragment>
        {this.displayComments()}
        <form onSubmit={this.handleSubmit}>
          <label>
          Post Comment:
          <input value={this.state.value} name="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )
  }
}

const mapStateToProps = ({users: { user: {id, username} }}) => ({
  userId: id,
  username
})

export default connect(mapStateToProps)(CommentsContainer)
