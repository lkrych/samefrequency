import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/chat_actions';
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
      return merge({}, _nullChat, {allMessages: action.messages});
    case RECEIVE_MESSAGE:
      const newMessage = action.message;
      const newMessageState = merge({},state.allMessages, newMessage);
      return merge({}, state, {allMessages: newMessageState});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default chatReducer;
