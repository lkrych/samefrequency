import { connect } from 'react-redux';

import ListenChat from './listen_chat';
import { findStation } from '../../util/station_util';
import { fetchRadioStream } from '../../actions/stream_actions';

const mapStateToProps = (state, ownProps) => {
  const stationId = ownProps.match.params.id;
  return {
    station: findStation(stationId, state),
    stream: state.stream.streamUri
  };
};

const mapDispatchToProps = dispatch => (
  {
    fetchRadioStream: (id) => dispatch(fetchRadioStream(id))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ListenChat);
