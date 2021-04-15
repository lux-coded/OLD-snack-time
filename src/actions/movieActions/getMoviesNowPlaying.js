import { GET_MOVIES_NOWPLAYING } from '../types.js';

const saveMoviesNowPlaying = payload => ({
  type: GET_MOVIES_NOWPLAYING,
  payload
});

const getMoviesNowPlaying = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesNowPlaying(data)))
    .catch(error => console.log(error));
  };
};

export default getMoviesNowPlaying;
