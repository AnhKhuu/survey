import { useMutation } from "react-query"
import { register, login, deleteUser } from "../apis/user.api"
import { deleteSurvey, postSurvey } from "../apis/survey.api"
import { postResponse } from "../apis/response.api"
import { deleteFAQ, postFAQs } from "../apis/faqs.api"
import { deleteCompetitions, postCompetitions } from "../apis/competition.api"
import { postSupportInformation } from "../apis/supportInformation"

type MutationProps = {
  handleSuccess?: () => void,
  handleError?: (props: any) => void,
}

export const useRegister = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: register,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useLogin = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: login,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useDeleteAccount = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useDeleteSurvey = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: deleteSurvey,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useCreateSurvey = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: postSurvey,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useSendResponse = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: postResponse,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useDeleteFAQ = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: deleteFAQ,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useCreateFAQ = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: postFAQs,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useCreateCompetition = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: postCompetitions,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useDeleteCompetition = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: deleteCompetitions,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useCreateSupportInformation = (options: MutationProps = {}) => {
  return useMutation({
    mutationFn: postSupportInformation,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}