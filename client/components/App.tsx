import Models from './Models.tsx'
import {useState} from 'react'
import { useChatMutation } from '../hooks/useChat.ts'
import { useQueryClient } from '@tanstack/react-query'


function App() {
  const queryClient = useQueryClient()
  const [apiUrl, setApiUrl] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)
  const [currentModel, setCurrentModel] = useState<string | null>(null)
  const { mutate: sendMessage } = useChatMutation(setResponse)

  return (
    <>
      <div className="app">
        <h1>Not A Real Harness.</h1>


        <form onSubmit={(e) => {e.preventDefault()
        console.log(e.target[0].value)
        setApiUrl(e.target[0].value)
        queryClient.invalidateQueries({ queryKey: ['models'] })
        }}>
          <input type="text" placeholder="API URL" />
        </form>



        <p>API URL: {apiUrl}</p>
        <p>Current Model: {currentModel}</p>
        <Models apiUrl={apiUrl} onSelected={setCurrentModel} />
        <div>
          <p>{response}</p>
        </div>
        <form onSubmit={(e) => {e.preventDefault()
        console.log(e.target[0].value)
        if (!apiUrl) {
          console.error('API URL is not set')
          return
        }
        sendMessage({input: e.target[0].value, url: apiUrl})
        e.target.reset()
        }}>
          <input type="text" disabled={!currentModel} placeholder={`Say something to ${currentModel}`} />
        </form>
      </div>
    </>
  )
}

export default App
