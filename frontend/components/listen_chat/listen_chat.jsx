import React from 'react';

import GreetingContainer from '../greeting/greeting_container';

class ListenChat extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    $(".video").toggleClass("video-hide"); //hide video
    this.props.fetchRadioStream(parseInt(this.props.station.id));
  }

  componentWillUnmount(){
    $(".video").toggleClass("video-hide");
  }

  render(){
    if(!this.props.station.id){
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
              <a className="navbar-brand" href="#">Same Frequency</a>
            </div>

            <ul className="nav navbar-right">
              <GreetingContainer />
            </ul>

          </div>
        </nav>
        <div className="musicPlayer">
          <audio src={this.props.stream} controls ></audio>
        </div>
      </div>
    );
  }
}
export default ListenChat;
