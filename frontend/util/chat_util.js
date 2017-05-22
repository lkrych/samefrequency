import lodash from 'lodash';

export const fetchStationMessages = (stationId) => (
  $.ajax({
    method: "GET" ,
    url: "/api/chatrooms" ,
    data: {station_id: stationId}
  })
);

export const selectAllMessages = (messages) => (
  lodash.values(messages)
);
