export const ADD_MESSAGE = "ADD_MESSAGES";
export const DISPLAY_MESSAGES = "DISPLAY_MESSAGES";


export function displayMessages(messages) {
  return {
    type: DISPLAY_MESSAGES,
    messages: messages
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}
