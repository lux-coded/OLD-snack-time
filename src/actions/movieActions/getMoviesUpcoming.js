import { GET_MOVIES_UPCOMING } from '../types.js';

const saveMoviesUpcoming = payload => ({
  type: GET_MOVIES_UPCOMING,
  payload
});

const getMoviesUpcoming = url => {
  return dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviesUpcoming(data)))
    .catch(error => console.log(error));
  };
};

export default getMoviesUpcoming;
