import { connect } from 'react-redux';

import StationsView from './stations_view';
import { fetchAllStations, searchStations }
  from '../../actions/stations_actions';
import { selectAllStations } from '../../reducers/selectors';

const mapStateToProps = state => (
  {
    stations: selectAllStations(state.stations.allStations)
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchAllStations: () => dispatch(fetchAllStations()),
    searchStations: (searchTerm) => dispatch(searchStations(searchTerm))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StationsView);
