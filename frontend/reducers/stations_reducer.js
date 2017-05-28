import { RECEIVE_STATIONS } from '../actions/stations_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const _nullStations= {
  allStations: {},
  errors: []
};

const stationsReducer = (state = _nullStations, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STATIONS:
      return merge({}, _nullStations, {allStations: action.stations});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default stationsReducer;
