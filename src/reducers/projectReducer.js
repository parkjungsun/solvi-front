import { GETMYCLASS, MAKECLASS, DELETECLASS, LOGOUT } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GETMYCLASS:
      return action.payload;
    case MAKECLASS:
      return [...state, action.payload];
    case DELETECLASS:
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
}
