import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import ChatContainer from '../chat/chat_container';

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
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/stations">Same Frequency</Link>
            </div>

            <ul className="nav navbar-right">
              <GreetingContainer />
            </ul>

          </div>
        </nav>
        <div className="musicPlayer">
          <audio src={this.props.stream} controls ></audio>
        </div>
        <ChatContainer station={this.props.station}/>
      </div>
    );
  }
}
export default ListenChat;
