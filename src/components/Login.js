import React from 'react';
import ApiAdapter from '../adapter';
import { SET_CURRENT_USER } from '../types';
import store from '../store';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: ''
    }

    this.ApiAdapter = new ApiAdapter()
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.ApiAdapter.loginUser(this.state.username).then(data => {
      store.dispatch({
        type: SET_CURRENT_USER,
        payload: data.user
      })
    })
    this.setState({username: ''})
  }

  render(){
    // console.log(this.props)
    return !!this.props.user ? (
      <Redirect to="/collections"/>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <label>
        Username:
        <input onChange={this.handleChange} type="text" name="username" value={this.state.username} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = ({users: {user} }) => {
  // console.log(user)
  return {user}
}


export default connect(mapStateToProps)(Login)
