import { useMutation } from "react-query"
import { register, login, deleteUser } from "../apis/user.api"

type MutationProps = {
  handleSuccess?: () => void,
  handleError?: (props: any) => void,
}

export const useRegister = (options: MutationProps) => {
  return useMutation({
    mutationFn: register,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useLogin = (options: MutationProps) => {
  return useMutation({
    mutationFn: login,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}

export const useDeleteAccount = (options: MutationProps) => {
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: options.handleSuccess,
    onError: options.handleError
  })
}