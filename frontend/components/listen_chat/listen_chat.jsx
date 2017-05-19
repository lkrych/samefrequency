import React from 'react';

import GreetingContainer from '../greeting/greeting_container';

class ListenChat extends React.Component {
  constructor(props){
    super(props);
    this.state = {stream: ''};
  }

  componentDidMount(){
    $(".video").toggleClass("video-hide"); //hide video
    const stream = this.props.streamRadioStation(this.props.id);
    debugger;
    this.setState( {stream} );
  }

  componentWillUnmount(){
    $(".video").toggleClass("video-hide");
  }

  render(){
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
              <a className="navbar-brand" href="#">Same Frequency</a>
            </div>

            <ul className="nav navbar-right">
              <GreetingContainer />
            </ul>

          </div>
        </nav>

        <div className="musicPlayer">
          <audio src={this.state.stream} controls autoplay></audio>
        </div>
      </div>
    );
  }
}
export default ListenChat;
