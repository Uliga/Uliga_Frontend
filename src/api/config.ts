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
const UPLOAD_BOOK = "accountBook/item";
const INCOME = "/income";
const RECORD = "/record";
const UPLOAD_INCOME = "accountBook/income";
const UPLOAD_RECORD = "accountBook/record";
const INVITATION = "/invitation";
const ITEM = "item";
const SCHEDULE = "/schedule";
const NOTIFICATION = "/notification";
const HISTORY = "/history";
const BUDGET = "/budget";
const LOGOUT = "/logout";
const SOCIAL = "/privateAccountBook";
const ANALYZE = "/analyze";
const WEEKLY = "/weekly";

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
  UPLOAD_BOOK: `${UPLOAD_BOOK}`,
  UPLOAD_INCOME: `${UPLOAD_INCOME}`,
  UPLOAD_RECORD: `${UPLOAD_RECORD}`,
  INVITATION_REPLY: `${ACCOUNT_BOOK}${INVITATION}/reply`,
  SCHEDULE: `${SCHEDULE}`,
  ADD_SCHEDULE: `${ACCOUNT_BOOK}${SCHEDULE}`,
  DELETE_ALARM: `${MEMBER}${NOTIFICATION}`,
  HISTORY: `${HISTORY}`,
  INCOME: `${INCOME}`,
  RECORD: `${RECORD}`,
  CREATE_BUDGET: `${ACCOUNT_BOOK}${BUDGET}`,
  BUDGET: `${BUDGET}`,
  LOGOUT: `${LOGOUT}`,
  REISSUE: `${AUTH}reissue`,
  SOCIAL: `${MEMBER}${SOCIAL}`,
  COMPARE_MONTH_ANALYZE: `${ANALYZE}/compare`,
  COMPARE_BUDGET_ANALZE: `${ANALYZE}${BUDGET}`,
  COMPARE_WEEKLY_ANALYZE: `${ANALYZE}${WEEKLY}`,
  ANALYZE: `${ANALYZE}`,
  SOCIAL_LOGIN: `${AUTH}social-login`,
  KAKAO_AUTH_URL: `${BASE_URL}/oauth2/authorization/kakao?redirect_uri=https://www.ouruliga.com`,
  GOOGLE_AUTH_URL: `${BASE_URL}/oauth2/authorization/google?redirect_uri=https://www.ouruliga.com`,
  LOCAL_KAKAO_AUTH_URL: `${BASE_URL}/oauth2/authorization/kakao?redirect_uri=http://localhost:3000`,
  LOCAL_GOOGLE_AUTH_URL: `${BASE_URL}/oauth2/authorization/google?redirect_uri=http://localhost:3000`,
  RESET_PASSWORD: `${AUTH}password/reset`,
};
export default API;
