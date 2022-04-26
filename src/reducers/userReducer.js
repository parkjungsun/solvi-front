import { LOGIN, LOGOUT, USERINFO, INITTOKEN } from "../actions";

export default function(state = { token: 0 }, action) {
  switch (action.type) {
    case INITTOKEN:
      return { token: action.payload };
    case LOGIN:
      return { token: action.payload };
    case LOGOUT:
      return { token: action.payload };
    case USERINFO:
      return {
        uid: action.payload.uid,
        email: action.payload.email,
        nickname: action.payload.nickname,
        auth: action.payload.auth,
        token: state.token
      };
    default:
      return state;
  }
}
