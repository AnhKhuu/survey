import { useQuery } from "react-query"
import { getUsers } from "../apis/user.api"
import { getSurveyById, getSurveys } from "../apis/survey.api"
import { getFAQs } from "../apis/faqs.api"

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