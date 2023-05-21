export type SurveyCreation = {
  userRoleId: number
  title: string,
  description: string,
  img: string,
  questions: QuestionCreation[],
}

export type QuestionCreation = {
  questionId: number,
  type?: QuestionType,
  questionContent: string,
  answers: AnswerCreation[],
}

export const enum QuestionType {
  TEXT = "text",
  TEXTAREA = "textArea",
  MULTI_SELECT = "multiSelect",
  SELECT = "select",
}

export type AnswerCreation = {
  correctAnswer: boolean,
  answerContent: string,
}

export type SurveyDetail = {
  surveyId: number,
  title: string,
  description: string
}

export type Question = {
  questionId: number,
  type?: QuestionType,
  questionContent: string,
  answers: Answer[]
}

export type Answer = {
  answerId: number,
  correctAnswer: boolean,
  answerContent: string,
}

export type SurveyInfo = {
  userRoleId: number
  title: string,
  description: string,
  img: string,
  questions: QuestionCreation[],
  surveyId: number
}