export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

import * as APIUtil from '../util/chat_util';
import { receiveErrors } from './error_actions';

export const receiveMessages = (messages) => (
   {
    type: RECEIVE_MESSAGES,
    messages
  }
);

export const receiveMessage = message => (
  {
    type: RECEIVE_MESSAGE,
    message: message.messages
  }
);

export const showAllMessages = (stationId, chatLength) => dispatch => (
   APIUtil.fetchStationMessages(stationId, chatLength).then(
    messages => dispatch(receiveMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
