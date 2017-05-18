import lodash from 'lodash';

export const upload/h_200RadioStations = () => (
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
    data: {searchTerm}
  })
);

export const findImages= (genre) => {
  return lodash.sample(IMAGE_URI_FINDER[genre]);

};

const IMAGE_URI_FINDER = {
  'Alternative': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495145166/alternative.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147286/alternative-2.jpg"],
  'Blues': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495145109/blues.jpg"],
  'Classical': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495148335/classical.jpg"],
  'Country': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495145056/country.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495145166/alternative.jpg"],
  'Decades': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143847/decades-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495144214/pop-2.jpg"],
  'Easy Listening': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495144595/easy-listening.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495146072/easy-listening-1.jpg"],
  'Electronic': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147393/electronic-music-1.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495145053/electronic-music-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143784/electronic-3.jpg"],
  'Folk': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495144667/folk.jpg"],
  'Inspirational': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147680/inspirational.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1494991427/sample.jpg"],
  'International': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147383/theme.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495146241/decades.jpg"],
  'Jazz': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147027/jazz-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495146864/jazz.jpg"],
  'Latin': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495144172/latin.jpg"],
  'Metal': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143845/metal-2.jpg"],
  'Misc': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147371/misc.jpg"],
  'New Age': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147880/new-age.jpg"],
  'Pop': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143964/pop.jpg"],
  'Public Radio': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147947/public-radio.jpg"],
  'R&B and Urban': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147050/randb.jpg"],
  'Rap': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143755/rap.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143668/rap-2.jpg"],
  'Reggae': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143684/reggae.jpg"],
  'Rock': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143794/rock-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143752/rock.jpg"],
  'Seasonal and Holiday': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495146869/holiday.jpg"],
  'Soundtracks': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495147172/soundtracks.jpg"],
  'Talk': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495143898/talk.jpg"],
  'Themes': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_200/v1495146241/decades.jpg"]
};
