import { SHOW_MESSAGES, ADD_MESSAGE } from '../actions/chat';
import { RECEIVE_ERRORS } from '../actions/error_actions';

const _nullMessages= {
  messages: [],
  errors: []
};

export const chatReducer = (state = _nullMessages, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    case SHOW_MESSAGES:
      return action.messages;
    default:
      return state;
  }
};
