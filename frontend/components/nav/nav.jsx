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
        <div className="navbar-container">
          <div className="navbar-brand-container" >
            <div className="navbar-logo-container">
              <Link className="navbar-logo" to="/stations">
                <img src="https://res.cloudinary.com/heab4q3lg/image/upload/v1495765879/wifi-logo.png" />
                <h1 className="navbar-logo-text">Same Frequency</h1>
              </Link>
            </div>
            <div className="navbar-search-container">
              <button className="btn btn-primary search-icon"><span>Send</span></button>
              <form className="navbar-search" onSubmit={this.handleSearch}>
                <div className="form-group">
                  <input type="text"
                    className="form-control"
                    onChange={this.onInput}
                    placeholder="Search"
                    value={this.state.searchTerm}></input>
                </div>

              </form>
            </div>
          </div>

          <ul className="nav">
            <GreetingContainer />
          </ul>

        </div>
      </nav>
    );
  }
}
export default withRouter(Nav);
