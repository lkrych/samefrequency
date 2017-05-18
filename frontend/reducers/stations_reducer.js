import { RECEIVE_STATIONS } from '../actions/stations_actions';

const stationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STATIONS:
      return action.stations;
    default:
      return state;
  }
};

export default stationsReducer;
