export const ADD_MESSAGE = "ADD_MESSAGES";
export const SHOW_MESSAGES = "SHOW_MESSAGES";
import * as APIUtil from '../util/chat_util';
import { receiveErrors } from './error_actions';

 const showMessages = (messages) => (
   {
    type: SHOW_MESSAGES,
    messages: messages
  }
);

const addMessage = (message) => (
   {
    type: ADD_MESSAGE,
    message: message
  }
);

export const showAllMessages = (stationId) => dispatch => (
   APIUtil.fetchStationMessages(stationId).then(
    messages => dispatch(showMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const addMessageToStation = (message, stationId) => dispatch => (
   APIUtil.addMessageToStation(message, stationId).then(
    messages => dispatch(addMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
