import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import ChatContainer from '../chat/chat_container';
import { findImageUri } from '../../util/station_util';
import NavContainer from '../nav/nav_container';


class ListenChat extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchRadioStream(parseInt(this.props.match.params.id));
  }

  render(){
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    let errorVid = <div></div>;
    if (errors.length > 0){
      errorVid =
      <div>
        <video
          src="https://res.cloudinary.com/heab4q3lg/video/upload/v1495838462/sorry.mp4"
          autoPlay loop>
        </video>
      </div>;
    if(!this.props.station || errors.length > 0 ){
      return (
        <div>
          <NavContainer />
            <ul className="errors-list">
              {errors}
              {errorVid}
            </ul>
        </div>

      );
    }

    }
    return(
      <div className="listen-chat-container">
        <NavContainer />
        <div className='listen-chat'>
          <div className='station-info-group'>
            <img src={this.props.uri}
               className="player-img"/>

             <div className="station-info">
               <h3>
                Station Name: { this.props.station.name }
               </h3>
               <h4>
                Genre: { this.props.station.genre }
               </h4>
             </div>

            <div className="musicPlayer">
              <audio src={this.props.stream} controls autoPlay ></audio>
            </div>
          </div>
          <ChatContainer station={this.props.station}/>
        </div>
      </div>
    );
  }
}
export default withRouter(ListenChat);
