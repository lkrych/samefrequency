export const RECEIVE_STATIONS = "RECEIVE_STATIONS";

import {receiveErrors} from './error_actions';
import * as APIUtil from '../util/station_util';

const receiveStations = (stations) => (
  {
    type: RECEIVE_STATIONS,
    stations
  }
);

export const fetchAllStations = () => dispatch => {
  return APIUtil.fetchRadioStations().then(
    stations => dispatch(receiveStations(stations)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const searchStations = searchTerm => dispatch => {
  return APIUtil.searchStations(searchTerm).then(
    searched => dispatch(receiveStations(searched)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};
