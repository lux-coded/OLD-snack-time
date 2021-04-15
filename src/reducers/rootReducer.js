import { combineReducers } from 'redux';
import getMoviesNowPlayingReducer from './movieReducers/getMoviesNowPlayingReducer.js';

const rootReducer = combineReducers({
  getMoviesNowPlayingReducer
});

export default rootReducer;
