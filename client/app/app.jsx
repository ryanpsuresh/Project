import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import LandingPage from './LandingPage.jsx';
import PlayerPage from './PlayerPage.jsx';

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={LandingPage}/>
    <Route path='/playerpage' component={PlayerPage}/>
  </Router>
)

export default App;