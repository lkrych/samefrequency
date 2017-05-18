import React from 'react';

class StationDetail extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const station = this.props.station;
    return(
      <tbody>
        <tr>
          <td>
            <p>A nice image</p>
          </td>
          <td>
            {station.genre}
          </td>
          <td>
            {station.name}
          </td>
        </tr>
      </tbody>
    );
  }
}

export default StationDetail;
