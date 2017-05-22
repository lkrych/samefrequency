export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

import * as APIUtil from '../util/chat_util';
import { receiveErrors } from './error_actions';

export const receiveMessages = (messages) => (
   {
    type: RECEIVE_MESSAGES,
    messages
  }
);

export const showAllMessages = (stationId) => dispatch => (
   APIUtil.fetchStationMessages(stationId).then(
    messages => dispatch(receiveMessages(messages)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
