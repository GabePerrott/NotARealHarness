import { useModels } from '../hooks/useModels.ts'

function Models() {
  const { data, isLoading, isError } = useModels()

  if (isLoading) {
    return <p>Loading models...</p>
  }

  if (isError) {
    return <p>Error loading models.</p>
  }

  return (
    <>
    <ul>
      {data?.map((model) => (
        <li key={model}><button>{model.id}</button></li>
      ))}
    </ul>
    </>
  )
}

export default Models