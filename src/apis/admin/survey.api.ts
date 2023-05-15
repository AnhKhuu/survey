import httpRequest from "../../services/httpRequest"

export const getSurveys = () => {
  return httpRequest.get(``)
}

export const postSurvey = (data: any) => {
  const newSurvey = {}
  return httpRequest.post(``, newSurvey);
}