import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

const baseApi = 'https://localhost:44346/api'

const requestConfig: IConfig = {
  baseURL: baseApi,
};

export const axiosInstance = axios.create(requestConfig);
