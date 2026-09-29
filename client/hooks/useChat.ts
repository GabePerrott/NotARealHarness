import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'

import { postToModel } from '../apis/chat.ts'

export function useChatMutation(setResponse: (response: string) => void) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({input, url}: {input: string, url: string}) => postToModel(input, url),
    onSuccess: (data) => {
      setResponse(data.choices[0].message.content)
    },
  })

  return mutation
}
