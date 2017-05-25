import lodash from 'lodash';

export const fetchStationMessages = (stationId, chatLength) => (
  $.ajax({
    method: "GET" ,
    url: "/api/chatrooms" ,
    data: {station_id: stationId,
            chatLength: chatLength}
  })
);

export const selectAllMessages = (messages) => (
  lodash.values(messages)
);
