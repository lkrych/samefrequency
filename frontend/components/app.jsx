import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import StationsContainer from './stations/stations_container';
import ListenChatContainer from './listen_chat/listen_chat_container';

const App = () => (
  <div className ="main">
    <AuthRoute exact path="/" component={Splash} />

    <ProtectedRoute path="/station/:id/:idx" component={ListenChatContainer} />
    <ProtectedRoute path="/stations" component={StationsContainer} />

  </div>
);

export default App;
