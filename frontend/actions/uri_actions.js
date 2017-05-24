export const RECEIVE_URIS = "RECEIVE_URIS";

export const receiveURIs = (uris) =>(
  {
    type: RECEIVE_URIS,
    uris
  }
);
