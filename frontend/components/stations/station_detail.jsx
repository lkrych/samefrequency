import React from 'react';
import { Link } from 'react-router-dom';

class StationDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const station = this.props.station;
    return(
      <li>
        <Link to={`/station/${station.id}`} className="overlay-container"
         data-overlay-text={`Name: ${station.name} || Genre: ${station.genre}`}>
         <img src={this.props.uri}
            alt={`${station.name} a ${station.genre} radio station`}
            className="overlay-img" />
        </Link>
      </li>
    );
  }
}

export default StationDetail;
