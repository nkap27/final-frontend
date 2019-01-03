// import TiledPics from '../components/TiledPics';
import React from 'react';
import { connect } from 'react-redux';
import PictureTile from '../components/PictureTile';
import Picture from '../components/Picture';
import CommentsContainer from './CommentsContainer';

class CollectionsContainer extends React.Component {

  state = {
    folderId: null,
    pictureId: null
  }

  displayFolders = () => {
    // console.log('DISPLAY FOLDER', this.props.folders)
    return this.props.folders.map(folder =>
      <div className="folder-titles"
        onClick={this.handleFolderId}
        key={folder.id}
        id={folder.id}
      >
        <h3>{folder.title}</h3>
        <h5>{folder.location}</h5>
      </div>)
  }

  handleFolderId = (event) => {
    // console.log('HANDLING FOLDER ID', event.target.id)
    // console.log(this.props.pictures)
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
    // console.log('hi hitting display pic')
    // console.log('picture id', this.state.pictureId)
    const pictureObj = this.props.pictures.find(picture => picture.id === this.state.pictureId)
    // console.log('pic obj', pictureObj)
    return <Picture pictureObj={pictureObj}/>
  }

  displayComments = () => {
    return <CommentsContainer pictureId={this.state.pictureId} />
  }

  render() {
    // console.log('state',this.state)
    return (
      <div className="pins-container">
        {this.state.pictureId ? this.props.topic : <h3>ALBUM</h3> }
        {!this.state.pictureId ? this.displayFolders() : null}
        {this.state.folderId && !this.state.pictureId ? this.displayPictures() : null}
        {this.state.pictureId ? this.displayPicture() : null}
        {this.state.pictureId ? this.displayComments() : null}
      </div>
    )
  }
}

const mapStateToProps = ({users: {user: {pictures, folders}} }) => ({
  pictures,
  folders
})

export default connect(mapStateToProps)(CollectionsContainer)
