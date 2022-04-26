import axios from "axios";
import { ROOT_URL, CLASS } from "../actions";

export const GETMYCLASS = "getmyclass";
export const MAKECLASS = "makeclass";
export const DELETECLASS = "deleteclass";

export const ENTERPROJECT = "enterproject";
export const GETALLTEAM = "getallteam";
export const MAKETEAM = "maketeam";
export const DELETETEAM = "deleteteam";
export const GETTEAMUSER = "getteamuser";
export const INVITEUSER = "inviteuser";
export const LEAVEUSER = "leaveuser";

export const GETIDEA = "getidea";
export const ADDIDEA = "addidea";

const URL = `${ROOT_URL}/${CLASS}`;

// 수업 정보 GET
export function getMyClass(token) {
  const request = axios
    .post(`${URL}/myClass`, { token })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETMYCLASS,
    payload: request
  };
}

// 수업 생성
export function makeClass(info) {
  const request = axios
    .post(`${URL}/create`, info)
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: MAKECLASS,
    payload: request
  };
}

// 수업 삭제
export function delClass(token, cid, data) {
  axios
    .post(`${URL}/remove`, { token, cid })
    .then(response => {
      return response.data.result;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: DELETECLASS,
    payload: data
  };
}

// Enter class [cid, team]
export function enterProject(id) {
  return {
    type: ENTERPROJECT,
    payload: id
  };
}

// teacher TEAM 들 정보
export function getAllTeam(token, cid) {
  const request = axios
    .post(`${URL}/team`, { token, cid })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETALLTEAM,
    payload: request
  };
}

// 팀 생성
export function makeTeam(info) {
  const request = axios
    .post(`${URL}/team/create`, info)
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: MAKETEAM,
    payload: request
  };
}

// 팀 삭제
export function delTeam(token, tid, data) {
  axios
    .post(`${URL}/team/remove`, { token, tid })
    .then(response => {
      return response.data.result;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: DELETETEAM,
    payload: data
  };
}

export function getTeamUser(token, tid) {
  const request = axios
    .post(`${URL}/team/user`, { token, tid })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETTEAMUSER,
    payload: request
  };
}

export function inviteUser(info) {
  const request = axios
    .post(`${URL}/team/invite`, info)
    .then(response => {
      if (response.data.result === 0) {
        alert(response.data.message);
      } else {
        return response.data;
      }
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: INVITEUSER,
    payload: request
  };
}

export function delUser(tid, uid, token, data) {
  axios
    .post(`${URL}/team/out`, { tid, uid, token })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: LEAVEUSER,
    payload: data
  };
}

export function getIdea(tid) {
  const request = axios
    .post(`${URL}/getIdea`, { tid })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETIDEA,
    payload: request
  };
}

export function addIdea(value) {
  axios
    .post(`${URL}/addIdea`, value)
    .then(response => {
      return response;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: ADDIDEA,
    payload: value
  };
}
