import axios from "axios";

import { ROOT_URL, GROUP } from "../actions";

export const GETMYTEAM = "getmyteam";

const URL = `${ROOT_URL}/${GROUP}`;

// student
export function getMyTeam(token) {
  const request = axios
    .post(`${URL}/my`, { token })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETMYTEAM,
    payload: request
  };
}
