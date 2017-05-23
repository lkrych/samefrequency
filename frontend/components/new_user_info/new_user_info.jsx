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
          <p onClick={this.toggleDiv}>Same Frequency makes it easy to listen to
             the radio with people from around the world. Pick a station
              and chat with everyone else that is listening.</p>
        </div>
      );
    }
  }
}

export default NewUserInfo;
