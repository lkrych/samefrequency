import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import stationsReducer from './stations_reducer';
import streamReducer from './stream_reducer';

 const rootReducer = combineReducers({
  session: sessionReducer,
  stations: stationsReducer,
  stream: streamReducer
});

export default rootReducer;
