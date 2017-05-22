export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

import * as APIUtil from '../util/chat_util';
import { receiveErrors } from './error_actions';

 const receiveMessages = (messages) => (
   {
    type: RECEIVE_MESSAGES,
    messages
  }
);



// export const showAllMessages = (stationId) => dispatch => (
//    APIUtil.fetchStationMessages(stationId).then(
//     messages => dispatch(showMessages(messages)),
//     errors => dispatch(receiveErrors(errors.responseJSON)))
// );
//
// export const addMessageToStation = (message, stationId) => dispatch => (
//    APIUtil.addMessageToStation(message, stationId).then(
//     messages => dispatch(addMessage(message)),
//     errors => dispatch(receiveErrors(errors.responseJSON)))
// );
