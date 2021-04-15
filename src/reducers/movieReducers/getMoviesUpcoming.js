import { GET_MOVIES_UPCOMING } from '../../actions/types.js';

const initialState = {
  results: []
};

const getMoviesUpcoming = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_UPCOMING:
      return {...action.payload};
    default:
      return state;
  }
};

export default getMoviesUpcoming;
