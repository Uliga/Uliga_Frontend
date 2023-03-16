const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH = "/auth/";
const MEMBER = "/member";
const LOGIN = "login";
const SIGNUP = "signup";
const CHECK_EMAIL = "mail/exists/";
const EMAIL_SEND = "mail";
const CODE = "mail/code";
const NICK_DUPLICATE = "nickname/exists/";
const GOOGLE = "social_login/google";
const KAKAO = "social_login/kakao";
const ACCOUNT_BOOK = "/accountBook";
const ASSET = "asset";
const INVITATION = "/invitation";
const ITEM = "item";

const API = {
  BASE_URL: `${BASE_URL}`,
  AUTH: `${AUTH}`,
  MEMBER: `${MEMBER}`,
  ASSET: `${ASSET}`,
  ITEM: `${ITEM}`,
  LOGIN: `${AUTH}${LOGIN}`,
  SIGNUP: `${AUTH}${SIGNUP}`,
  CHECK_EMAIL: `${AUTH}${CHECK_EMAIL}`,
  EMAIL_SEND: `${AUTH}${EMAIL_SEND}`,
  CODE: `${AUTH}${CODE}`,
  NICK_DUPLICATE: `${AUTH}${NICK_DUPLICATE}`,
  GOOGLE: `${AUTH}${GOOGLE}`,
  KAKAO: `${AUTH}${KAKAO}`,
  ACCOUNT_BOOK: `${ACCOUNT_BOOK}`,
  INVITATION_REPLY: `${ACCOUNT_BOOK}${INVITATION}/reply`,
};

export default API;
