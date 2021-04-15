import { combineReducers } from 'redux';
import getMoviesNowPlaying from './movieReducers/getMoviesNowPlaying.js';
import getMoviesTopRated from './movieReducers/getMoviesTopRated.js';
import getMoviesUpcoming from './movieReducers/getMoviesUpcoming.js';
import getMoviesPopular from './movieReducers/getMoviesPopular.js';

const rootReducer = combineReducers({
  getMoviesNowPlaying,
  getMoviesTopRated,
  getMoviesUpcoming,
  getMoviesPopular
});

export default rootReducer;
