// import TiledPics from '../components/TiledPics';
import React from 'react';
import { connect } from 'react-redux';
import PictureTile from '../components/PictureTile';

class CollectionsContainer extends React.Component {

  state = {
    folderId: null
  }

  displayFolders = () => {
    console.log(this.props.folders)
    return this.props.folders.map(folder =>
      <div
        onClick={this.handleFolderId}
        key={folder.id}
        id={folder.id}
      >
        {folder.title}
      </div>)
  }

  handleFolderId = (event) => {
    // console.log(event.target.id)
    return this.setState({ folderId: parseInt(event.target.id) })
  }

  displayPictures = () => {
    return this.props.pictures.reduce((folderPictures, currPicture) => {
      if(currPicture.folder_id === this.state.folderId) {
        return folderPictures;
      }
      return folderPictures.concat(<PictureTile image_url={currPicture.image_url}/>)
    }, []);
  }

  render() {
    console.log(this.state)
    return (
      <div className="pins-container">
      <h3>ALBUM</h3>
      {this.displayFolders()}
      {this.state.folderId ? this.displayPictures() : null}
      </div>
    )
  }
}

const mapStateToProps = ({users: {user: {pictures, folders}} }) => ({
  pictures,
  folders
})

export default connect(mapStateToProps)(CollectionsContainer)
