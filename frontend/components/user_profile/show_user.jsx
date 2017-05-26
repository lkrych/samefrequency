import React from 'react';

class ShowUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="show-user-modal">
        <h2> User Profile</h2>
        <div className="show-user-info">
          <img src={this.props.user.image_url}/>
          <p>Username: {this.props.user.username === null || this.props.user.username === '' ?
               "Not created yet!" : this.props.user.username}</p>
             <p>Email: {this.props.user.email}</p>
        </div>
        <button className="btn btn-primary" onClick={this.props.toggleEditModal}>Edit Profile</button>
      </div>
    );
  }

}

export default ShowUser;
