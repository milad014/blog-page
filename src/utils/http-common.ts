import axios, { Axios, AxiosPromise, AxiosRequestConfig } from "axios";
import serverUrls from "../configs/server-urls";

export function api<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
  return axios({
    baseURL: serverUrls.api,
    ...config,
  });
}
