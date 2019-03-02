import { combineReducers } from 'redux';

import {
  GET_FLIGHTS,
  POST_FLIGHT,
  DELETE_FLIGHT,
  SET_SELECTED_ORIGIN,
  SET_SELECTED_DESTINATION,
} from './actions';

const initialState = {
  flights: [],
  selectedOrigin: {},
  selectedDestination: {},
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

const selectedOrigin = (state = initialState.selectedOrigin, action) => {
  switch (action.type) {
    case SET_SELECTED_ORIGIN:
      return action.city
    default:
      return state;
  }
};

const selectedDestination = (state = initialState.selectedDestination, action) => {
  switch (action.type) {
    case SET_SELECTED_DESTINATION:
      return action.city
    default:
      return state;
  }
};



const reducer = combineReducers({
  flights,
  selectedOrigin,
  selectedDestination,
});

export default reducer;
