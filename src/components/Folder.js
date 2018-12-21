import React from 'react'
import store from '../store';
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';
import { SET_CURRENT_USER } from '../types';
import PinsContainer from '../containers/PinsContainer';

class Folder extends React.Component {
  constructor(props) {
    super(props)
    this.ApiAdapter = new ApiAdapter()
    this.state = { folderId: null }
  }

  componentDidMount() {
    const username = 'thebaribo'

    this.ApiAdapter
    .loginUser(username)
    .then(userObj => {
      const payload = {user: userObj.user}

      store.dispatch({
        type: SET_CURRENT_USER,
        payload
      })

    })
  }

  handleFolderId = (event) => {
    event.preventDefault();
    this.setState({ folderId: event.target.id })
  }

  displayFolders = (folders) => {
    return folders.map((folder) => {
      return (
        <div className="folder" key={folder.id} id={folder.id} onClick={this.handleFolderId}>
          <h2>{folder.title}</h2>
          <h4>{folder.location}</h4>
        </div>)
    })
  }

  collectPictures = () => {
    const picturesArr = this.props.user.pictures.filter((picture) => {
      return parseInt(picture.folder_id) === parseInt(this.state.folderId)
    })

    return picturesArr
  }

  displayPictures = () => {
    const pictures = this.collectPictures()

    return <PinsContainer pics={pictures} />
  }

  render() {
    // console.log(this.props.user)
    return (
      <React.Fragment>
        { this.props.user ? this.displayFolders(this.props.user.folders) : null }
        { this.state.folderId ? this.displayPictures() : null }
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.users.user }
}


export default connect(mapStateToProps)(Folder)
