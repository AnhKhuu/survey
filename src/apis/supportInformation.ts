import httpRequest from "../services/httpRequest"
import { SupportInformationCreation } from "../types/supportInformation"

const apiPrefix = '/SupportInformation'

export const getSupportInformation = () => {
  return httpRequest.get(apiPrefix)
}

export const postSupportInformation = (data:SupportInformationCreation) => {
  return httpRequest.post(apiPrefix, data)
}