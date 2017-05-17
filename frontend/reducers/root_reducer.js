import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import stationsReducer from './stations_reducer';

 const rootReducer = combineReducers({
  session: sessionReducer,
  stations: stationsReducer
});

export default rootReducer;
