import React from 'react';
import { Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import StationsContainer from './stations/stations_container';
import ListenChat from './listen_chat/listen_chat';

const App = () => (
  <div className ="main">
    <AuthRoute path="/" component={Splash} />
    <ProtectedRoute path="/" component={StationsContainer} />
    <ProtectedRoute path="/:id" component={ListenChat} />
  </div>
);

export default App;
