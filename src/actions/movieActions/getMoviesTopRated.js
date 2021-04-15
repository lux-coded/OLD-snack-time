import { GET_MOVIES_TOPRATED } from '../types.js';

const saveMoviesTopRated = payload => ({
  type: GET_MOVIES_TOPRATED,
  payload
});

const getMoviesTopRated = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesTopRated(data)))
    .catch(error => console.log(error));
  };
};

export default getMoviesTopRated;
