import axios from "axios";
import API from "./config";
import PATH from "../constants/path";
import toastMsg from "../components/Toast";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

const handleUnauthorized = () => {
  localStorage.clear();
  window.location.href = PATH.LANDING;
};

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

let isAlreadyFetchingAccessToken = false;
type Subscriber = (accessToken: string) => void;
let subscribers: Subscriber[] = [];

function addSubscriber(callback: Subscriber) {
  subscribers.push(callback);
}

function onAccessTokenFetched(accessToken: string) {
  subscribers.forEach(callback => callback(accessToken));
  subscribers = [];
}

async function resetTokenAndReattemptRequest(error: any) {
  try {
    const { response: errorResponse } = error;

    const retryOriginalRequest = new Promise((resolve, reject) => {
      addSubscriber(async (accessToken: string) => {
        try {
          errorResponse.config.headers.Authorization = `Bearer ${accessToken}`;
          resolve(authorizationClient(errorResponse.config));
        } catch (err) {
          reject(err);
        }
      });
    });

    if (!isAlreadyFetchingAccessToken) {
      isAlreadyFetchingAccessToken = true;
      await axios
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
            localStorage.setItem("accessToken", data.accessToken);
            isAlreadyFetchingAccessToken = false;
            onAccessTokenFetched(data.accessToken);
          },
        )
        .catch(err => {
          toastMsg("로그인 정보가 없어 메인 화면으로 이동합니다.");
          handleUnauthorized();
          return Promise.reject(err);
        });
    }
    return await retryOriginalRequest;
  } catch (refreshError) {
    toastMsg("로그인 정보가 없어 메인 화면으로 이동합니다.");
    handleUnauthorized();
    return Promise.reject(refreshError);
  }
}

authorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    if (
      error.response.data.errorCode === 401 &&
      localStorage.getItem("accessToken")
    ) {
      return resetTokenAndReattemptRequest(error);
    }
    return Promise.reject(error);
  },
);

const unAuthorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

unAuthorizationClient.interceptors.response.use(
  response => {
    response.headers["Access-Control-Allow-Origin"] =
      "https://www.ouruliga.com/";
    return response;
  },
  error => {
    console.error("[Axios]", error);
    return Promise.reject(error);
  },
);

export { authorizationClient, unAuthorizationClient };
