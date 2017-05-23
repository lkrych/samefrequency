import lodash from 'lodash';
import pls from 'pls';

export const fetchRadioStations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/stations'
  })
);

export const fetchStation = (stationId) => (
  $.ajax({
    method: 'GET',
    url: 'api/stations'
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
  'Alternative': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145166/alternative.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147286/alternative-2.jpg"],
  'Blues': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145109/blues.jpg"],
  'Classical': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495148335/classical.jpg"],
  'Country': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145056/country.jpg"],
  'Decades': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143847/decades-2.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144214/pop-2.jpg"],
  'Easy Listening': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144595/easy-listening-1.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146072/easy-listening-2.jpg"],
  'Electronic': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147393/electronic-music-1.jpg",
  "https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495145053/electronic-music-2.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143784/electronic-3.jpg"],
  'Folk': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144667/folk.jpg"],
  'Inspirational': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147680/inspirational.jpg",
  "https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1494991427/sample.jpg"],
  'International': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147383/theme.jpg"],
  'Jazz': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147027/jazz-2.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146864/jazz.jpg"],
  'Latin': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495144172/latin.jpg"],
  'Metal': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143845/metal-2.jpg"],
  'Misc': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147371/misc.jpg"],
  'New Age': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147880/new-age.jpg"],
  'Pop': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143964/pop.jpg"],
  'Public Radio': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147947/public-radio.jpg"],
  'Rap': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143755/rap.jpg",
  "https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143668/rap-2.jpg"],
  'Reggae': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143684/reggae.jpg"],
  'Rock': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143794/rock-2.jpg",
"https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143752/rock.jpg"],
  'Soundtracks': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495147172/soundtracks.jpg"],
  'Talk': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495143898/talk.jpg"],
  'Themes': ["https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1495146241/decades.jpg"]
};
