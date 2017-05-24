import { RECEIVE_URIS } from '../uri_actions';

const uriReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
  case RECEIVE_URIS:
    return action.uris;
  default:
    return state;
  }
};

export default uriReducer;
