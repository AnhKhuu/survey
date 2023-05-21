import httpRequest from "../services/httpRequest"
import { ResponseCreation } from "../types/response"

const apiPrefix = '/Responses'

export const postResponse = (data:ResponseCreation) => {
  return httpRequest.post(`${apiPrefix}/SendResponses`, data)
}

export const getResponses = () => {
  return httpRequest.get(apiPrefix)
}