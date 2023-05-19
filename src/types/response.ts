export type ResponseCreation = {
  surveyId: number,
  userId: number,
  questions: ResponseQuestionCreation[]
}

export type ResponseQuestionCreation = {
  questionId: number,
  selectedAnswerIds: number[],
}