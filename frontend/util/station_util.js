const fetchRadioStations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stations'
  })
);


const streamRadioStation = (id) => (
  $.ajax({
    method: 'GET',
    url: `http://yp.shoutcast.com/sbin/tunein-station.m3u?id=${id}`
  })
);

const searchRadioStation = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: '/api/stations/search',
    data: { searchTerm }
  })
);
