import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/chat_actions';
import { selectAllMessages} from '../util/chat_util';
import {merge, keys} from 'lodash/merge';

const parseForUsers = (messages) => {
  
};


const chatRoomUserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MESSAGES:
      return parseForUsers(state);
    case RECEIVE_MESSAGE:

    default:
      return state;
  }
};
