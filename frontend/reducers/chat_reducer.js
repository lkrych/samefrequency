import { RECEIVE_MESSAGES } from '../actions/chat_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';


const chatReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return [...state, action.messages];
    default:
      return state;
  }
};

export default chatReducer;
