import { RECEIVE_STREAM_URI} from '../actions/stream_actions';
import { RECEIVE_STREAM_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const _nullStream= {
  streamUri: {},
  errors: []
};

const streamReducer = (state = _nullStream, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_STREAM_URI:
      return merge({}, _nullStream, {streamUri: action.uri});
    case RECEIVE_STREAM_ERRORS:
      return merge({}, _nullStream, {errors: action.errors});
    default:
      return state;
  }
};

export default streamReducer;
