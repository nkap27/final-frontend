const BASE_URL = 'http://localhost:3000/api/v1'

const Login = 'login'

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
}

// Adapter.loginUser(username)
