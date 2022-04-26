import { GETIDEA, ADDIDEA } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GETIDEA:
      return action.payload;
    case ADDIDEA:
      return [...state, action.payload];
    default:
      return state;
  }
}
