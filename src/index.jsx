import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { MapViewContainer } from './components/MapView';
import App from './components/App';

const routes = (
  <Route component={App}>
    <Route path="/map" component={MapViewContainer} />
  </Route>
);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
