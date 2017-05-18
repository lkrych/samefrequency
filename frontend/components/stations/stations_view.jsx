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
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

          <a className="navbar-brand" href="#">Same Frequency</a>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </nav>
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
