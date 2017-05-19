import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import StationsContainer from './stations/stations_container';
import ListenChatContainer from './listen_chat/listen_chat_container';

const App = () => (
  <div className ="main">
    <AuthRoute path="/" component={Splash} />

    <ProtectedRoute path="/" component={StationsContainer} />
    <ProtectedRoute path="/:id" component={ListenChatContainer} />
  </div>
);

export default App;
