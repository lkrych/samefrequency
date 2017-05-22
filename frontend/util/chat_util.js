
//AJAX HTTP Requests are not necessary for Websockets!
export const fetchStationMessages = (stationId) => (
  $.ajax({
    method: "GET" ,
    url: "api/chatrooms" ,
    data: {station_id: stationId}
  })
);

export const addMessageToStation = (message, stationId) => (
  $.ajax({
    method: "POST" ,
    url: "api/chatrooms" ,
    data: {content: message, chatroom_id: stationId}
  })
);
