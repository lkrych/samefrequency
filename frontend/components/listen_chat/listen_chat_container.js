import { connect } from 'react-redux';

import ListenChat from 'listen_chat';
import { findStation, streamRadioStation } from '../../util/station_util';

const mapStateToProps = (state,ownProps) => {
  const stationId = ownProps.match.params.id;
  return {
    station: findStation(stationId, state)
  };
};

const mapDispatchToProps = dispatch => (
  {
    streamRadioStation: (id) => dispatch(streamRadioStation(id))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ListenChat);
