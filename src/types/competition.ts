export type CompetitionCreation = {
  name: string,
  timeStartCompetition: string,
  timeEndCompetition: string,
  location: string,
  surveyId: number,
}

export type CompetitionDetail = {
  competitionContentId: number,
  name: string,
  timeStartCompetition: string,
  timeEndCompetition: string,
  location: string,
  surveyId: number,
  competitionResults: CompetitionResult
}

export type CompetitionResult = {
  numberUserJoined: number,
  responseId: number,
}