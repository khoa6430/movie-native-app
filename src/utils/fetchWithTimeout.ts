import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { HTTP_STATUS_CODE } from "../constants/httpStatusCode";
import { API_ACCESS_TOKEN, API_URL } from "../configs/endpoints";
console.log("API_URL:", API_URL);
console.log("API_ACCESS_TOKEN:", API_ACCESS_TOKEN);

interface AxiosTimeoutOptions extends AxiosRequestConfig {
  timeout?: number;
  body?: string | FormData;
}

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
// @ts-ignore
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (
    config?.url?.startsWith("/auth/signin") ||
    config?.url?.startsWith("/auth/signup") ||
    config?.url?.startsWith("/users/verify") ||
    config?.url?.startsWith("/auth/password/reset") ||
    config?.url?.startsWith("/auth/password/reset/request") ||
    config?.url?.startsWith("/auth/sign-up/verify/code")
  ) {
    return config;
  }
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    // Authorization: `Bearer ` + getToken()
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  };

  return config;
});

// @ts-ignore
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    // refresh token
    const AuthorizationStatus = HTTP_STATUS_CODE.UNAUTHORIZED;
    if (AuthorizationStatus) {
    }
    const successStatuses = [
      HTTP_STATUS_CODE.SUCCESS,
      HTTP_STATUS_CODE.CREATED_SUCCESS,
      HTTP_STATUS_CODE.SUCCESS_NO_CONTENT,
    ].includes(res?.status);
    if (!successStatuses) {
      const config: AxiosRequestConfig = {};
      // @ts-ignore
      throw new AxiosError(
        // @ts-ignore
        res?.response?.data?.error?.message,
        // @ts-ignore
        res?.status,
        config,
        res,
        res
      );
    }

    return res;
  },
  (error) => {
    return Promise.reject(error?.response?.data);
  }
);

const bodyData = (body: any) => {
  if (body && body instanceof FormData) {
    return body;
  }
  return JSON.parse(body);
};

export const axiosWithTimeout = (
  url: string,
  options: AxiosTimeoutOptions = {}
): Promise<AxiosResponse | any> => {
  const {
    timeout = 10000,
    method,
    body,
    params,
    headers,
    ...fetchOptions
  } = options;
  return Promise.race([
    axiosInstance(url, {
      method: method?.toLowerCase(),
      data: body ? bodyData(body) : null,
      params: params || null,
      headers: {
        "Access-Control-Allow-Origin": "*",
        ...headers,
      },
      ...fetchOptions,
    }),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(
          new Error(
            `Request for ${url} timed out after ${timeout} milliseconds`
          )
        );
      }, timeout);
    }),
  ]) as Promise<Response>;
};

export default { axiosWithTimeout };
