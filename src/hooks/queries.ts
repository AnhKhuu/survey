import { useQuery } from "react-query"
import { getUsers } from "../apis/user.api"
import { getSurveyById, getSurveyByRole, getSurveys } from "../apis/survey.api"
import { getFAQs } from "../apis/faqs.api"
import { getCompetitions } from "../apis/competition.api"
import { getSupportInformation } from "../apis/supportInformation"
import { getResponses } from "../apis/response.api"

export const useGetUsers = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_USERS'],
    () => getUsers(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
} 

export const useGetSurveys = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_SURVEYS'],
    () => getSurveys(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
} 

export const useGetSurveyById = (surveyId: string | undefined) => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_SURVEY_BY_ID'],
    () => getSurveyById(surveyId),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}

export const useGetFAQs = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_FAQS'],
    () => getFAQs(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}

export const useGetCompetitions = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_COMPETITONS'],
    () => getCompetitions(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}

export const useGetSupportInformations = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_SUPPORT_INFORMATIONS'],
    () => getSupportInformation(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}

export const useGetSurveyByRole = (userRoleId: number, queryKey: string) => {
  const { data, refetch, isSuccess } = useQuery(
    [queryKey],
    () => getSurveyByRole(userRoleId),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}

export const useGetResponses = () => {
  const { data, refetch, isSuccess } = useQuery(
    ['GET_RESPONSES'],
    () => getResponses(),
    {
      refetchOnMount: false,
      keepPreviousData: true
    }
  )
  return { data, refetch, isSuccess }
}