// import TiledPics from '../components/TiledPics';
import React from 'react';
import { connect } from 'react-redux';
import PictureTile from '../components/PictureTile';
import Picture from '../components/Picture';

class CollectionsContainer extends React.Component {

  state = {
    folderId: null,
    pictureId: null
  }

  displayFolders = () => {
    // console.log(this.props.folders)
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
    return this.setState({ folderId: parseInt(event.target.id), pictureId: null })
  }

  selectPictureId = (event) => {
    return this.setState({ pictureId: parseInt(event.target.id), folderId: null })
  }

  displayPictures = () => {
    return this.props.pictures.reduce((folderPictures, currPicture) => {
      if(currPicture.folder_id === this.state.folderId) {
        return folderPictures;
      }
      return folderPictures.concat(<PictureTile key={currPicture.id} selectPictureId={this.selectPictureId} {...currPicture}/>)
    }, []);
  }

  displayPicture = () => {
    const pictureObj = this.props.pictures.find(picture => picture.id === this.state.pictureId)
    return <Picture {...pictureObj}/>
  }


  render() {
    // console.log(this.state)
    return (
      <div className="pins-container">
        <h3>ALBUM</h3>
        {!this.state.pictureId ? this.displayFolders() : null}
        {this.state.folderId && !this.state.pictureId ? this.displayPictures() : null}
        {this.state.pictureId ? this.displayPicture() : null}
      </div>
    )
  }
}

const mapStateToProps = ({users: {user: {pictures, folders}} }) => ({
  pictures,
  folders
})

export default connect(mapStateToProps)(CollectionsContainer)
