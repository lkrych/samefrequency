import React from 'react';

import { findImageUri } from '../../util/station_util';

class StationDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const station = this.props.station;
    return(
      <li>
       <a href="#" className="overlay-container"
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
