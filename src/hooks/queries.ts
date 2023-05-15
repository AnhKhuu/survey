import { useQuery } from "react-query"
import { getUsers } from "../apis/user/userInfo.api"

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