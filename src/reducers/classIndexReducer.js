import { ENTERPROJECT, LOGOUT } from "../actions";

export default function(state = 0, action) {
  switch (action.type) {
    case ENTERPROJECT:
      return action.payload;
    case LOGOUT:
      return 0;
    default:
      return state;
  }
}
