export * from "../config";
export * from "./pageFunction";
export * from "./userFunction";
export * from "./projectFunction";
export * from "./teamFunction";

// Auth
export const TEACHER = 1;
export const STUDENT = 0;

// nav index
export const EXPLAIN = -1;
export const INPROJECT = 0;
export const PROJECTSPACE = 1;
export const NOTICE = 2;
export const SETTING = 3;

// page view
export const FULLNAV = 0;
export const SUBNAV = 1;

// POPUP
export const OFF_POPUP = { active: 0, kind: 0 };
export const ON_BUILD_PROJECT = { active: 1, kind: 1 };
export const ON_BUILD_TEAM = { active: 1, kind: 2 };
export const ON_DELETE_PROJECT = { active: 1, kind: 3 };
export const ON_DELETE_TEAM = { active: 1, kind: 4 };
export const ON_INVITE_USER = { active: 1, kind: 5 };
export const ON_LEAVE_TEAM = { active: 1, kind: 6 };
