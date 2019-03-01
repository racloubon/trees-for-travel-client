import { combineReducers } from 'redux';

import {
  GET_FLIGHTS,
  POST_FLIGHT,
  DELETE_FLIGHT
} from './actions';

const initialState = {
  flights: [],
};

const flights = (state = initialState.flights, action) => {
  switch (action.type) {
    case GET_FLIGHTS:
      return [...state].concat(action.flights)
    case POST_FLIGHT:
      return [...state, action.flight]
    case DELETE_FLIGHT:
      return state.filter(el => el._id !== action.id)
    default:
      return state;
  }
};


const reducer = combineReducers({
  flights,
});

export default reducer;
