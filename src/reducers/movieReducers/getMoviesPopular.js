import { GET_MOVIES_POPULAR } from '../../actions/types.js';

const initialState = {
  results: []
};

const getMoviesPopular = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_POPULAR:
      return {...action.payload};
    default:
      return state;
  }
};

export default getMoviesPopular;
