import { GET_MOVIES_TOPRATED } from '../../actions/types.js';

const initialState = {
  results: []
};

const getMoviesTopRated = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_TOPRATED:
      return {...action.payload};
    default:
      return state;
  }
};

export default getMoviesTopRated;
