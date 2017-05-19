import lodash from 'lodash';
import pls from 'pls';

export const fetchRadioStations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stations'
  })
);

export const streamRadioStation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/stations/stream`,
    data: {id}
  })
);

export const searchStations = (searchTerm) => (
  $.ajax({
    method: 'GET',
    url: '/api/stations/search',
    data: {searchTerm}
  })
);

export const findStation = (id, store) => (
   store.stations.allStations[id]
);

export const findImages = (stations) => {
  const genres = lodash.keys(IMAGE_URI_FINDER);
  const stationGenres = stations.map(station => station.genre);
  let foundGenres = [];
  let foundURIs = [];
  stationGenres.forEach(genre => {
    if (foundGenres.includes(genre) || !genres.includes(genre)){
      const {randomGenre, randomURI} = findNewGenreUrl(foundURIs);
      foundGenres.push(randomGenre);
      foundURIs.push(randomURI);
    } else{
      foundGenres.push(genre);
      foundURIs.push(lodash.sample(IMAGE_URI_FINDER[genre]));
    }
  });
  return foundURIs;
};

const findNewGenreUrl = (alreadyDisplayed) => {
  const genres = lodash.keys(IMAGE_URI_FINDER);
  let randomGenre = lodash.sample(genres);
  let randomURI = lodash.sample(IMAGE_URI_FINDER[randomGenre]);
  while(alreadyDisplayed.includes(randomURI)){
    randomGenre = lodash.sample(genres);
    randomURI = lodash.sample(IMAGE_URI_FINDER[randomGenre]);
  }
  return {randomGenre: randomGenre, randomURI: randomURI};
};


const IMAGE_URI_FINDER = {
  'Alternative': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145166/alternative.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147286/alternative-2.jpg"],
  'Blues': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145109/blues.jpg"],
  'Classical': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495148335/classical.jpg"],
  'Country': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145056/country.jpg"],
  'Decades': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143847/decades-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144214/pop-2.jpg"],
  'Easy Listening': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144595/easy-listening-1.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146072/easy-listening-2.jpg"],
  'Electronic': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147393/electronic-music-1.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145053/electronic-music-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143784/electronic-3.jpg"],
  'Folk': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144667/folk.jpg"],
  'Inspirational': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147680/inspirational.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1494991427/sample.jpg"],
  'International': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147383/theme.jpg"],
  'Jazz': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147027/jazz-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146864/jazz.jpg"],
  'Latin': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144172/latin.jpg"],
  'Metal': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143845/metal-2.jpg"],
  'Misc': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147371/misc.jpg"],
  'New Age': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147880/new-age.jpg"],
  'Pop': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143964/pop.jpg"],
  'Public Radio': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147947/public-radio.jpg"],
  'Rap': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143755/rap.jpg",
  "http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143668/rap-2.jpg"],
  'Reggae': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143684/reggae.jpg"],
  'Rock': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143794/rock-2.jpg",
"http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143752/rock.jpg"],
  'Soundtracks': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147172/soundtracks.jpg"],
  'Talk': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143898/talk.jpg"],
  'Themes': ["http://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146241/decades.jpg"]
};
