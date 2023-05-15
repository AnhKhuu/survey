import httpRequest from "../../services/httpRequest"
import { FullUserInfo, UserInfo } from "../../types/user"

const apiPrefix = '/UserInfoes'

export const register = (data: UserInfo) => {
  return httpRequest.post(`${apiPrefix}/register`, data);
}

export const login = (data: {userName: string, password: string}) => {
  return httpRequest.post(`${apiPrefix}/login`, data);
}

export const getUsers = () => {
  return httpRequest.get(`${apiPrefix}/login`);
}

export const getUserById = (userId: string) => {
  return httpRequest.get(`${apiPrefix}/${userId}`)
}

export const editUser = (userId: string, data: FullUserInfo) => {
  return httpRequest.put(`${apiPrefix}/${userId}`, data)
}

export const deleteUser = (userId: string) => {
  return httpRequest.delete(`${apiPrefix}/${userId}`)
}

