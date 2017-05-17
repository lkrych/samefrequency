import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { fetchAllStations } from './actions/stations_actions';

window.fetchAllStations = fetchAllStations; // delete
let store;
document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store; //delete
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
