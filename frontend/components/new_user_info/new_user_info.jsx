import React from 'react';

class NewUserInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = { toggled: true};
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv(){
   const newState = !this.state.toggled;
   this.setState({toggled: newState});
  }

  render(){
    if(this.state.toggled){
      return (
        <div className="new-user-div">
          <br></br>
          <a onClick={this.toggleDiv}>What is Same Frequency?</a>
        </div>
      );
    }else {
      return(
        <div className="new-user-div">
          <br></br>
          <p onClick={this.toggleDiv}>Wouldn't it be nice if you could trade Tweet
            storms for Fireside chats? Grab your family and friends and
            (virtually) gather around the radio with Same Frequency,
            a social radio app.</p>
        </div>
      );
    }
  }
}

export default NewUserInfo;
