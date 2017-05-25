import React from 'react';
import { Link } from 'react-router-dom';

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
    if(!this.props.station){
      return <div></div>;
    }
    return(
      <div className="container">
        <NavContainer />
        <Link to="/stations">Back</Link>
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
export default ListenChat;
