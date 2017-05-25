import React from 'react';

import {iconChoices} from '../../util/icon_util';

class EditUserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      image_url: '',
      username: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.chooseIcon = this.chooseIcon.bind(this);
  }

  componentDidMount(){
    this.setState(
      {
        image_url: this.props.user.image_url,
        username: this.props.user.username,
        email: this.props.user.email,
        icon_active: false
      }
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state, this.props.formType);
  }

  onInput(property){
    return (e) => {
      this.setState( { [property]: e.target.value } );
    };
  }

  chooseIcon(e){
    e.preventDefault();
    console.log(e.target.value);
    this.setState(
      {image_url : e.target.value }
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
      <form onSubmit={this.handleSubmit}>
        <br></br>

        <div class="form-control form-icons">
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
