import React from 'react';
import { Link } from 'react-router-dom';

const NavBarInfo = (props) => {
  if (props.urlParams.pathname === "/stations"){
    return(
      <div className ="navbar-info">
        <p> Pick a radio station!</p>
        <img src="https://res.cloudinary.com/heab4q3lg/image/upload/v1495831573/pick-station.png" />
      </div>
    );
  } else{
    return(
      <div className ="navbar-info-listen">
        <div className="navbar-info-first-line">
          <p> Chat with other listeners!</p>
          <img src="https://res.cloudinary.com/heab4q3lg/image/upload/v1495834062/chat.png" />
        </div>
        <div className="navbar-info-second-line">
          <p>
            <Link to={"/stations"}>
              or go back to the main page
            </Link>
          </p>
        </div>
      </div>
    );
  }
};

export default NavBarInfo;
