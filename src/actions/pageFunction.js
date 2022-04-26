// axios 사용 x page 관리 위한 함수들

// action type
export const RESIZE = "resize";
export const ONPOPUP = "onpopup";

// 페이지 크기 조절
export function resize(size) {
  return {
    type: RESIZE,
    payload: size
  };
}

// popup 조절
export function onpopup(solve) {
  return {
    type: ONPOPUP,
    payload: solve
  };
}
