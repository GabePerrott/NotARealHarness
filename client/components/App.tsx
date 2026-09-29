import Models from './Models.tsx'
import {useState} from 'react'
import { useChatMutation } from '../hooks/useChat.ts'
function App() {

  const [response, setResponse] = useState<string | null>(null)
  const { mutate: sendMessage } = useChatMutation(setResponse)

  return (
    <>
      <div className="app">
        <h1>Not A Real Harness.</h1>
        <Models />
        <div>
          <p>{response}</p>
        </div>
        <form onSubmit={(e) => {e.preventDefault()
        console.log(e.target[0].value)
        sendMessage(e.target[0].value)
        e.target.reset()
        }}>
          <input type="text" placeholder="Say something to an LLM" />
        </form>
      </div>
    </>
  )
}

export default App
