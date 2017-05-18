import React from 'react';

import { AuthRoute } from '../../util/route_util';
import GreetingContainer from '../greeting/greeting_container';
import SessionFormContainer from '../session/session_form_container';
import NewUserInfo from '../new_user_info/new_user_info.jsx';

export default () => {
  return(
    <div id= "splash" className ="container">
      <header>
        <h1>Same Frequency</h1>
        <h2>Social Radio</h2>
        <GreetingContainer />
      </header>
      <AuthRoute path="/" component={SessionFormContainer} />
      <AuthRoute path="/" component={NewUserInfo} />
    </div>
  );
};
