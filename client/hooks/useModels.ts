import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { getModels } from '../apis/chat.ts'

export function useModels(apiUrl?: string) {
  const query = useQuery({ queryKey: ['models'], queryFn: () => getModels(apiUrl) })
  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  }
}