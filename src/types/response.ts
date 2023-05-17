export type ResponseCreation = {
  surveyId: number,
  uesrId: number,
  questions: ResponseQuestionCreation[]
}

export type ResponseQuestionCreation = {
  questionId: number,
  selectedAnswerIds: number[],
}