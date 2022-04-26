import axios from "axios";
import { ROOT_URL, AUTH } from "../actions";

export const REGISTER = "register";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const USERINFO = "userinfo";
export const INITTOKEN = "initToken";

const URL = `${ROOT_URL}/${AUTH}`;

export function register(values, callback) {
  const request = axios
    .post(`${URL}/register`, values)
    .then(response => {
      if (!response.data.result) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        callback("/main");
      }
      return 0;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: REGISTER,
    payload: request
  };
}

export function login(values, callback) {
  const request = axios
    .post(`${URL}/login`, values)
    .then(response => {
      if (response.data.result === 0) {
        alert(response.data.message);
        callback("/register");
      } else {
        callback("/main");
        return response.data.token;
      }
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: LOGIN,
    payload: request
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: 0
  };
}

export function initToken(token) {
  return {
    type: INITTOKEN,
    payload: token
  };
}

export function userinfo(token) {
  const request = axios
    .post(`${URL}/info`, { token })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: USERINFO,
    payload: request
  };
}
