export const fetchStationMessages = (stationId) => (
  $.ajax({
    method: "GET" ,
    url: "/api/chatrooms" ,
    data: {station_id: stationId}
  })
);
