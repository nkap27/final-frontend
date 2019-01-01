const BASE_URL = 'http://localhost:3000/api/v1'

const Login = 'login'
const FeatureFolder = 'folders/featured'
const Pictures = 'pictures'
const Comments = 'comments'

export default class Adapter {
  parseHeaders = response => response.json()

  // fetchEndpoint = (endPoint) => fetch(`${BASE_URL}/${endPoint}`)
  //                             .then(this.parseHeaders)


  loginUser = (username) => (
    fetch(`${BASE_URL}/${Login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
        }
      })
    }).then(this.parseHeaders)
  )

  loadFeatureFolder = () => (
    fetch(`${BASE_URL}/${FeatureFolder}`).then(this.parseHeaders)
  )

  fetchPicture = (pictureId) => (
    fetch(`${BASE_URL}/${Pictures}/${pictureId}`).then(this.parseHeaders)
  )

  fetchComments = () => (
    fetch(`${BASE_URL}/${Comments}`).then(this.parseHeaders)
  )

}

// Adapter.loginUser(username)
