import httpRequest from "../services/httpRequest"
import { CompetitionCreation } from "../types/competition";

const apiPrefix = "/CompetitionContent";

export const getCompetitions = () => {
  return httpRequest.get(apiPrefix)
}

export const postCompetitions = (data:CompetitionCreation) => {
  return httpRequest.post(apiPrefix, data)
}

export const deleteCompetitions = (competitionId: number) => {
  return httpRequest.delete(`${apiPrefix}/${competitionId}`)
}