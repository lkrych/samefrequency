import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import StationDetail from './station_detail';

class StationsView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $(".video").toggleClass("video-hide"); //hide video
    this.props.fetchAllStations();
  }

  componentWillUnmount(){
    $(".video").toggleClass("video-hide");
  }

  render(){
    const stations = this.props.stations.map(station => (
      <StationDetail key={station.id} station={station} />
    ));

    return (
      <div>
        <GreetingContainer />
        <section>
          <table className ="table">
            <thead>
              <tr>
                <th> Image </th>
                <th> Genre link</th>
                <th> Title </th>
              </tr>
            </thead>
            {stations}
          </table>
        </section>
      </div>

    );
  }
}
export default StationsView;
