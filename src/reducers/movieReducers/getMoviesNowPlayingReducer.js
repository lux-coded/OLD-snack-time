import { GET_MOVIES_NOWPLAYING } from '../../actions/types.js';

const initialState = {
  results: []
};

const getMoviesNowPlaying = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_NOWPLAYING:
      return {...action.payload};
    default:
      return state;
  }
};

export default getMoviesNowPlaying;
