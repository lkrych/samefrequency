export const fetchRadioStations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stations'
  })
);


export const streamRadioStation = (id) => (
  $.ajax({
    method: 'GET',
    url: `http://yp.shoutcast.com/sbin/tunein-station.m3u?id=${id}`
  })
);

export const searchStations = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: '/api/stations/search',
    data: { stations: {searchTerm} }
  })
);
