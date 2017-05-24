import React from 'react';

class ShowUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="show-user-modal">
        <label> Profile Image:
          <img src={this.props.user.image_url}/>
        </label>
        <label> Username:
          <p>{this.props.user.username === null ? "Not created yet!" : this.props.username}</p>
        </label>
        <label> Email:
          <p>{this.props.user.email}</p>
        </label>


        <a onClick={this.props.toggleEditModal}>Edit Profile</a>
      </div>
    );
  }

}

export default ShowUser;
