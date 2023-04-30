import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export type IConfig = AxiosRequestConfig & {
  showSpinner?: boolean;
};

const baseApi = process.env.API_URL
  ? `${process.env.API_URL}/api`
  : 'http://localhost:3001/v1';

console.log('base api', baseApi);

const requestConfig: IConfig = {
  baseURL: baseApi,
};

export const axiosInstance = axios.create(requestConfig);
