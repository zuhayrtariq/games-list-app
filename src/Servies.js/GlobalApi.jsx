import axios from 'axios';
const key = '5fb38b264c844362ba59f736bf5782b3';
const axioCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5fb38b264c844362ba59f736bf5782b3',
  },
});

const getPopularGame = axioCreate.get('/games?key=' + key);
const getMovieDetails = (id) => axioCreate.get('/games/' + id + '/movies');
const getGameListByGenreId = (id) =>
  axioCreate.get('/games?key=' + key + '&genres=' + id);
export default {
  getPopularGame,
  getMovieDetails,
  getGameListByGenreId,
};
