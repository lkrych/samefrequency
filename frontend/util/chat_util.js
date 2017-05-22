export const fetchStationMessages = (stationId) => (
  $.ajax({
    method: "GET" ,
    url: "api/chatrooms" ,
    data: {stationId}
  })
);

export const addMessageToStation = (message, stationId) => (
  $.ajax({
    method: "POST" ,
    url: "api/chatrooms" ,
    data: {message, stationId}
  })
);
