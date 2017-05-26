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
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-container">
          <div className="navbar-brand-container" >
            <Link className="navbar-brand" to="/stations">
              <img src="https://res.cloudinary.com/heab4q3lg/image/upload/v1495765879/wifi-logo.png" />
              Same Frequency
            </Link>
          </div>

          <ul className="nav">
            <GreetingContainer />
          </ul>

          <div>
            <form className="navbar-form navbar-search" onSubmit={this.handleSearch}>
              <div className="form-group">
                <input type="text"
                  className="form-control"
                  onChange={this.onInput}
                  placeholder="Search"
                  value={this.state.searchTerm}></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <ul className="errors-list">
              {errors}
            </ul>

          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Nav);
