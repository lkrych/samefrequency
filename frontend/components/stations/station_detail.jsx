import React from 'react';
import { Link } from 'react-router-dom';

class StationDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const station = this.props.station;
    const matchURI = new RegExp(/400\/(.+).jpg/);
    const imageURI = matchURI.exec(this.props.uri)[1];
    return(
      <li>
        <Link to={`/station/${station.id}/${imageURI}`} className="overlay-container"
         data-overlay-text={`Name: ${station.name} || Genre: ${station.genre}`}>
         <img src={this.props.uri}
            alt={`${station.name} a ${station.genre} radio station`}
            className="overlay-img .img-responsive" />
        </Link>
      </li>
    );
  }
}

export default StationDetail;
