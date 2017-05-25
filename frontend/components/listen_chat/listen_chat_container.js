import { connect } from 'react-redux';

import ListenChat from './listen_chat';
import { findStation, generateURI } from '../../util/station_util';
import { fetchRadioStream } from '../../actions/stream_actions';


const mapStateToProps = (state, ownProps) => {
  const stationId = ownProps.match.params.id;
  const cloudinary = ownProps.match.params.cloudinary;
  const imageId = ownProps.match.params.imageId;
  return {
    station: findStation(stationId, state),
    stream: state.stream.streamUri,
    uri: generateURI(cloudinary, imageId),
    errors: state.stream.errors
  };
};

const mapDispatchToProps = dispatch => (
  {
    fetchRadioStream: (id) => dispatch(fetchRadioStream(id))
  }
);

export default connect(mapStateToProps,mapDispatchToProps)(ListenChat);
