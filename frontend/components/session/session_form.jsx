import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e){
    e.preventDefault();
    this.setState( ({ email: 'user1@example.com',
                      password: 'password'} ), () =>
                      this.props.processForm(this.state, 'login'));
  }

  render(){
    const otherRoute = this.props.formType === 'login' ? 'signup' : 'login';
    const thisRouteText = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    if (this.props.loggedIn){
      return( <Redirect to='/' />);
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <p>Please {this.props.formType} or {
            <Link to={`/${otherRoute}`}>
              { otherRoute } instead
            </Link>
          }
        </p>
        <ul>
          {errors}
        </ul>
        <div className="form-group">
          <label> Your email:
            <input type='text'
              className="form-control"
              onChange={this.onInput('email')}
              value={this.state.email}>
            </input>
          </label>
        </div>
        <div className="form-group">
          <label> Password:
            <input type='password'
              className="form-control"
              onChange={this.onInput('password')}
              value={this.state.password}>
            </input>
          </label>
        </div>

        <button className="btn btn-primary">{thisRouteText}</button>
        <span></span>
        <button
          className="btn btn-info"
          id="demo-login-btn"
          onClick={this.demoLogin}>
          Demo Login</button>
      </form>
    );
  }
}

export default withRouter(SessionForm);
