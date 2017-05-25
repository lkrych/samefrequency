import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/chat_actions';
import { selectAllMessages} from '../util/chat_util';
import merge from 'lodash/merge';

const parseForUsers = (messages) => {
  const users = {};
  const authors = selectAllMessages(messages).map(message => message.author);
  authors.forEach(author => (
    users[author.id] = author
  ));
  return users;
};

const mergeUsers = (message, state) => {
  const author = selectAllMessages(message).map(newMessage => newMessage.author)[0];
  return merge({}, state, { [author.id]: author } );
};


const chatRoomUserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_MESSAGES:
      return parseForUsers(action.messages);
    case RECEIVE_MESSAGE:
      return mergeUsers(action.message, state);
    default:
      return state;
  }
};

export default chatRoomUserReducer;
