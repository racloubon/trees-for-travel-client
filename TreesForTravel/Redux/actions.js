export const GET_FLIGHTS = "GET_FLIGHTS";
export const POST_FLIGHT = "POST_FLIGHT";
export const DELETE_FLIGHT = "DELETE_FLIGHT";

export const getFlights = flights => ({
  type: GET_FLIGHTS,
  flights: flights
});

export const postFlight = flight => ({
  type: POST_FLIGHT,
  flight: flight
});

export const deleteFlight = id => ({
  type: DELETE_FLIGHT,
  id: id
});

export const SET_SELECTED_ORIGIN = "SET_SELECTED_ORIGIN";
export const SET_SELECTED_DESTINATION = "SET_SELECTED_DESTINATION";

export const setSelectedOrigin = city => ({
  type: SET_SELECTED_ORIGIN,
  city: city
})

export const setSelectedDestination = city => ({
  type: SET_SELECTED_DESTINATION,
  city: city
})
