import React from 'react';

import { AuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import NewUserInfo from '../new_user_info/new_user_info.jsx';

export default () => {
  return(
    <div className="splash-container">
      <video className="video"
        src="https://res.cloudinary.com/heab4q3lg/video/upload/v1494991486/reel-2_d5uumo.mp4"
         autoPlay loop>
      </video>
      <div id= "splash" className ="splash-modal">
        <header>
          <h1>Same Frequency</h1>
          <h2>Radio Chatrooms</h2>
        </header>
        <AuthRoute path="/" component={SessionFormContainer} />
        <AuthRoute path="/" component={NewUserInfo} />
      </div>
    </div>
  );
};
