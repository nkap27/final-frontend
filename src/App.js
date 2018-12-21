import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import FeatureContainer from './containers/FeatureContainer';
import PinsContainer from './containers/PinsContainer';
import NavBar from './components/NavBar';
import Folder from './components/Folder';

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
          <Route exact path= '/folder' component={Folder} />
          <Route exact path="/home" component={FeatureContainer} />
          <Route exact path="/pins" component={PinsContainer}  />
        </Switch>
      </div>
    );
  }
}

export default App;
