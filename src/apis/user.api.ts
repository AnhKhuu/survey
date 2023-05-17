import httpRequest from "../services/httpRequest";
import { FullUserInfo, LoginInfo, UserInfo } from "../types/user";


const apiPrefix = '/UserInfoes'

export const register = (data: UserInfo) => {
  return httpRequest.post(`${apiPrefix}/register`, data);
}

export const login = (data: LoginInfo) => {
  return httpRequest.post(`${apiPrefix}/login`, data);
}

export const getUserById = (userId: number) => {
  return httpRequest.get(`${apiPrefix}/${userId}`)
}

export const getUsers = () => {
  return httpRequest.get(`${apiPrefix}`);
}

export const editUser = (userId: number, data: FullUserInfo) => {
  return httpRequest.put(`${apiPrefix}/${userId}`, data)
}


export const deleteUser = (userId: number) => {
  return httpRequest.delete(`${apiPrefix}/${userId}`)
}