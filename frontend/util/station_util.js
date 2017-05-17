const fetchRadioStations = () => (
  $.ajax({
    method: 'GET',
    url: `http://api.shoutcast.com/legacy/Top500?k=${SHOUTCAST_KEY}`
  })
);

const streamRadioStation = (id) => (
  $.ajax({
    method: 'GET',
    url: `http://yp.shoutcast.com/sbin/tunein-station.m3u?id=${id}`
  })
);

const searchRadioStation = (search_term) => (
  $.ajax({
    method: 'GET',
    url: `http://api.shoutcast.com/legacy/stationsearch?k=
    ${SHOUTCAST_KEY}&search=${encodeURIComponent(search_term)}`
  })
);
