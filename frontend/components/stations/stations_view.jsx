import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import StationDetail from './station_detail';
import { findImages } from '../../util/station_util';

class StationsView extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: ''};
    this.onInput = this.onInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    $(".video").toggleClass("video-hide"); //hide video
    this.props.fetchAllStations();
  }

  componentWillUnmount(){
    $(".video").toggleClass("video-hide");
  }

  onInput(e){
    e.preventDefault();
    this.setState({searchTerm: e.target.value});
  }

  handleSearch(e){
    e.preventDefault();
    this.props.searchStations(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render(){
    const image_uris = findImages(this.props.stations);

    const stations = this.props.stations.map((station, idx) => (
      <StationDetail key={station.id} station={station} uri={image_uris[idx]} />
    ));

    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Same Frequency</a>
            </div>

            <ul className="nav navbar-right">
              <GreetingContainer />
            </ul>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-right" onSubmit={this.handleSearch}>
                <div className="form-group">
                  <input type="text" className="form-control" onChange={this.onInput} placeholder="Search"></input>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>

            </div>
          </div>
        </nav>
        <section className="wrapper">
          <ul className="img-grid">
            {stations}
          </ul>
        </section>
      </div>

    );
  }
}
export default StationsView;
