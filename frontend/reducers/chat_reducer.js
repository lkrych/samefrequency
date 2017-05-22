import { RECEIVE_MESSAGES } from '../actions/chat_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';
import merge from 'lodash/merge';

const _nullChat= {
  allMessages: {},
  errors: []
};

const chatReducer = (state = _nullChat, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return merge({}, state, {allMessages: action.messages});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default chatReducer;
