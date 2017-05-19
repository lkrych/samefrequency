export const RECEIVE_STREAM_URI = "RECEIVE_STREAM_URI";

import receiveErrors from './error_actions';
import * as APIUtil from '../util/station_util';



const receiveStream = (uri) => (
  {
  type: RECEIVE_STREAM_URI,
  uri
  }
);

export const fetchRadioStream = (id) => dispatch => {
  return APIUtil.streamRadioStation(id).then(
    uri => dispatch(receiveStream(uri)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};
