import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import CollectionsContainer from './containers/CollectionsContainer';
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import Login from './components/Login';

class App extends Component {

  render() {
    // console.log(this.props.state.getState())
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/home"/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/collections" component={CollectionsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
