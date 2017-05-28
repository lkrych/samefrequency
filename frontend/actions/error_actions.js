export const RECEIVE_STREAM_ERRORS = "RECEIVE_STREAM_ERROR";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_SEARCH_ERROR";



export const receiveStreamErrors = errors => (
  {
    type: RECEIVE_STREAM_ERRORS,
    errors
  }
);

export const receiveSearchErrors = errors => (
  {
    type: RECEIVE_SEARCH_ERRORS,
    errors
  }
);
