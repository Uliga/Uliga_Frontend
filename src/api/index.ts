import axios from "axios";
import API from "./config";

axios.defaults.baseURL = API.BASE_URL;
axios.defaults.withCredentials = true;

const authorizationClient = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
});

authorizationClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
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
