const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH = "/auth/";
const MEMBER = "/member/";
const LOGIN = "login";
const SIGNUP = "signup";
const GOOGLE = "social_login/google";
const KAKAO = "social_login/kakao";
const EMAILSEND = "mail";
const CODE = "mail/code";
const NICK_DUPLICATE = "nickname/exists/";

const API = {
  BASE_URL: `${BASE_URL}`,
  AUTH: `${AUTH}`,
  MEMBER: `${MEMBER}`,
  LOGIN: `${AUTH}${LOGIN}`,
  SIGNUP: `${AUTH}${SIGNUP}`,
  GOOGLE: `${AUTH}${GOOGLE}`,
  KAKAO: `${AUTH}${KAKAO}`,
  EMAILSEND: `${AUTH}${EMAILSEND}`,
  CODE: `${AUTH}${CODE}`,
  NICK_DUPLICATE: `${AUTH}${NICK_DUPLICATE}`,
};

export default API;
