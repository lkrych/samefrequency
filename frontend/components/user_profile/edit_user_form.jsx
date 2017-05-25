import React from 'react';

import {iconChoices, magnifyIcon} from '../../util/icon_util';

class EditUserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_url: '',
      username: '',
      email: '',
      id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.chooseIcon = this.chooseIcon.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        image_url: this.props.user.image_url,
        username: this.props.user.username === null ? '' : this.props.user.username ,
        email: this.props.user.email,
        id: this.props.user.id
      }
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  onInput(property){
    return (e) => {
      this.setState( { [property]: e.target.value } );
    };
  }

  chooseIcon(e){
    e.preventDefault();
    $('img').removeClass('icon-choice-active');
    $(e.target).toggleClass('icon-choice-active');
    this.setState(
      { image_url : magnifyIcon(e.target.src) }
    );
  }

  render(){
    const icons = iconChoices().map((icon_uri, idx) => (
      <img
        className="icon-choice"
        key={idx}
        src={icon_uri}
        onClick={this.chooseIcon} />
    )
  );

    return(
      <form onSubmit={this.handleSubmit} className="edit-user-form">
        <h2> Edit User Profile</h2>
        <br></br>

        <div className="form-icons">
          <p>User icons</p>
          {icons}
        </div>

        <div className="form-group">
          <label> Username:
            <input type='text'
              className="form-control"
              onChange={this.onInput('username')}
              value={this.state.username}>
            </input>
          </label>
        </div>
        <div className="form-group">
          <label> Your email:
            <input type='text'
              className="form-control"
              onChange={this.onInput('email')}
              value={this.state.email}>
            </input>
          </label>
        </div>

        <button className="btn btn-primary">Save Edit</button>
        <span></span>
      </form>
    );
  }
}

export default EditUserForm;
