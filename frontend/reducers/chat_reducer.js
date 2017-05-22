import { SHOW_MESSAGES, ADD_MESSAGE } from '../actions/chat';

export default function chat(state = {}, action) {
  const { type, messages } = action;

  switch (type) {
  case ADD_MESSAGE:

  case SHOW_MESSAGES:
    
  default:
    return state;
  }
}
