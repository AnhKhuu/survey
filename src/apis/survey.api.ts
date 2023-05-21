import httpRequest from "../services/httpRequest";
import { SurveyCreation } from "../types/survey";

const apiPrefix = '/Surveys'

export const getSurveys = () => {
  return httpRequest.get(apiPrefix)
}

export const postSurvey = (data: SurveyCreation) => {
  return httpRequest.post(apiPrefix, data);
}

export const putSurvey = (data: SurveyCreation) => {
  return httpRequest.put(apiPrefix, data);
}

export const deleteSurvey = (surveyId: number) => {
  return httpRequest.delete(`${apiPrefix}/${surveyId}`)
}

export const getSurveyById = (surveyId: string | undefined) => {
  return httpRequest.get(`${apiPrefix}/${surveyId}`)
}

export const getSurveyByRole = (userRoleId: number) => {
  return httpRequest.get(`${apiPrefix}/role/${userRoleId}`)
}