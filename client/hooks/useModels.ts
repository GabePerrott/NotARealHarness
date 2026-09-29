import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { getModels } from '../apis/chat.ts'

export function useModels() {
  const query = useQuery({ queryKey: ['models'], queryFn: () => getModels() })
  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  }
}