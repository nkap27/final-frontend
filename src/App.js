import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import AlbumsContainer from './containers/AlbumsContainer';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';

// const BASE_URL = 'http://localhost:3000/api/v1/users'

class App extends Component {
  //
  // state = {
  //   usersData: null,
  // }

  // componentDidMount() {
  //   fetch(BASE_URL)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({ usersData: data[0] },()=>console.log(data[0])))
  // }

  render() {
    // console.log(this.props.state.getState())
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/home"/>
          <Route exact path= '/home' component={HomeContainer} />
          <Route exact path="/pins" component={AlbumsContainer}  />
        </Switch>
      </div>
    );
  }
}

export default App;
