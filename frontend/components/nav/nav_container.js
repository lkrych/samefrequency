import { connect } from 'react-redux';
import Nav from './nav';

import { searchStations }
  from '../../actions/stations_actions';

const mapStateToProps = state => (
  {
    errors: state.stations.errors
  }
);

const mapDispatchToProps = dispatch => (
  {
    searchStations: (searchTerm) => dispatch(searchStations(searchTerm))

  }
);

export default connect(mapStateToProps,mapDispatchToProps)(Nav);
