import { ONPOPUP, LOGOUT } from "../actions";

export default function(state = { active: 0, kind: 0 }, action) {
  switch (action.type) {
    case ONPOPUP:
      return action.payload;
    case LOGOUT:
      return { active: 0, kind: 0 };
    default:
      return state;
  }
}
