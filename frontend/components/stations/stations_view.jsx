import React from 'react';
import { Link, Route } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import StationDetail from './station_detail';
import { findImages } from '../../util/station_util';
import NavContainer from '../nav/nav_container';


class StationsView extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '',
                    uris: []};
    this.onInput = this.onInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
      errorVid = <video
        src="https://res.cloudinary.com/heab4q3lg/video/upload/v1495824267/search_not_found.mp4"
        autoPlay loop>
      </video>;
    }
    return (
      <div className="stations-container">
        <NavContainer />
        <h1 className="station-view-logo"> Stations </h1>
        <ul className="errors-list">
          {errors}
          {errorVid}
        </ul>
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
