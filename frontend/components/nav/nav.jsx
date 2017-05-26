import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: ''};
    this.onInput = this.onInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  onInput(e){
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
  }

  handleSearch(e){
    e.preventDefault();
    this.props.searchStations(this.state.searchTerm);
    this.setState({searchTerm: ''});
    this.props.history.push(`/stations`); //redirect on search;

  }

  render(){
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/stations">
              <img src="https://res.cloudinary.com/heab4q3lg/image/upload/v1495765879/wifi-logo.png" />
              Same Frequency
            </Link>
          </div>

          <ul className="nav navbar-right">
            <GreetingContainer />
          </ul>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-right navbar-search" onSubmit={this.handleSearch}>
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  onChange={this.onInput}
                  placeholder="Search"
                  value={this.state.searchTerm}></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Nav);
