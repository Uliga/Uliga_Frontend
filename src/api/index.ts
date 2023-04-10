import axios from "axios";
import API from "./config";
// import PATH from "../constants/path";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

// const handleUnauthorized = () => {
//   localStorage.clear();
//   window.location.href = PATH.LANDING;
// };

const authorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

authorizationClient.interceptors.request.use(config => {
  return Object.assign(config, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
});

authorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error);
    switch (error.response.data.errorCode) {
      // 액세스 토큰 만료
      case 401: {
        return axios
          .post(API.REISSUE, { token: localStorage.getItem("accessToken") })
          .then(
            ({
              data,
            }: {
              data: {
                accessToken: string;
                grantType: string;
                accessTokenExpiresIn: number;
              };
            }) => {
              // console.log(data);
              localStorage.setItem("accessToken", data.accessToken);
              return authorizationClient.request(error.config);
            },
          )
          .catch(err => {
            console.log("두번째 에러 : ", err);
            // handleUnauthorized();
          });
      }
      // 접근 권한 없음(ex. ADMIN페이지에 USER가 접근)
      case 403:
        break;
      default:
        break;
    }
    console.error("[Axios]", error);
    return Promise.reject(error);
  },
);

const unAuthorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

unAuthorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error("[Axios]", error);
    return Promise.reject(error);
  },
);

export { authorizationClient, unAuthorizationClient };
