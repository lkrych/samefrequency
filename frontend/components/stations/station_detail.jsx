import React from 'react';
import { Link } from 'react-router-dom';

import { findImageUri } from '../../util/station_util';

class StationDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const station = this.props.station;
    return(
      <li>
       <a href={`/${station.id}`} className="overlay-container"
         data-overlay-text={`Name: ${station.name} || Genre: ${station.genre}`}>
         <img src={this.props.uri}
            alt={`${station.name} a ${station.genre} radio station`}
            className="overlay-img" />
       </a>
   </li>
    );
  }
}

export default StationDetail;
