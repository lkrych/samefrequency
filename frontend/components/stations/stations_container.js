import { connect } from 'react-redux';

import StationsView from './stations_view';
import { fetchAllStations }
  from '../../actions/stations_actions';
import { selectAllStations } from '../../reducers/selectors';

const mapStateToProps = state => (
  {
    stations: selectAllStations(state.stations.allStations),
    errors: state.stations.errors
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchAllStations: () => dispatch(fetchAllStations())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(StationsView);
