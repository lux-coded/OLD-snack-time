import { GET_MOVIES_POPULAR } from '../types.js';

const saveMoviesPopular = payload => ({
  type: GET_MOVIES_POPULAR,
  payload
});

const getMoviesPopular = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesPopular(data)))
    .catch(error => console.log(error));
  };
};

export default getMoviesPopular;
