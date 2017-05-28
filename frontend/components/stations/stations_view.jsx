import React from 'react';
import { Link, Route } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import StationDetail from './station_detail';
import { findImages } from '../../util/station_util';
import NavContainer from '../nav/nav_container';
import Errors from '../error/error';


class StationsView extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '',
                    uris: []};
    this.onInput = this.onInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchStations = this.fetchStations.bind(this);
  }

  componentDidMount(){
    //hide video
    this.props.fetchAllStations();
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

  fetchStations(e){
    e.preventDefault();
    this.props.fetchAllStations();
  }

  render(){
    const imageURIs = findImages(this.props.stations);
    const stations = this.props.stations.map((station, idx) => (
      <StationDetail key={station.id}
        station={station}
        uri={imageURIs[idx]}
        idx={idx} />
    ));
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
    let errorVid = <div></div>;
    if (errors.length > 0){
      errorVid =
      <div>
        <li
          className="nothing-found-list"
           onClick={this.fetchStations}> Or, Click Here</li>
        <video
          src="https://res.cloudinary.com/heab4q3lg/video/upload/v1495838462/sorry.mp4"
          autoPlay loop>
        </video>
      </div>;
    }
    return (
      <div className="stations-container">
        <NavContainer />
        <Errors errors={errors} errorVid={errorVid} />
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
