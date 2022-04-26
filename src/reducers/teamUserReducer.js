import { GETTEAMUSER, INVITEUSER, LEAVEUSER, LOGOUT } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GETTEAMUSER:
      return action.payload;
    case INVITEUSER:
      return [...state];
    case LEAVEUSER:
      return action.payload;
    case LOGOUT:
      return [];
    default:
      return state;
  }
}
