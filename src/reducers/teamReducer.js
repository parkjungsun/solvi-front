import { GETMYTEAM, GETALLTEAM, MAKETEAM, LOGOUT } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GETMYTEAM: // student team list
      return action.payload;
    case MAKETEAM: // teacher team management
      return [...state, action.payload];
    // case DELETETEAM: // teacher team management
    //   return action.payload;
    case GETALLTEAM: // teacher team management
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
}
