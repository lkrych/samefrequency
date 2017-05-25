import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import stationsReducer from './stations_reducer';
import streamReducer from './stream_reducer';
import chatReducer from './chat_reducer';
import chatRoomUserReducer from './chat_room_users_reducer';

 const rootReducer = combineReducers({
  session: sessionReducer,
  stations: stationsReducer,
  stream: streamReducer,
  chat: chatReducer,
  users: chatRoomUserReducer
});

export default rootReducer;
