import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getModels(url: string) {
  try {
    const response = await request.get(`${rootURL}/models`).query({ url: url })
    return await response.body
  } catch (error) {
    console.error('Error fetching models:', error)
    throw error
  }
}

export async function postToModel(input: string, url: string) {
  console.log('Sending request to model with input:', input, 'and url:', url)
  try {
    const res = await request.post(`${rootURL}/chat`).set('Content-Type', 'application/json').send({
    model: 'halogen-qwen3.8-flash-next',
    messages: [
      {
        role: 'user',
        content: input,
      },
    ],
  }).query({ url: url }); // Sends JSON post body

    console.log('Status:', res.status);
    console.log('Response Body:', res.body.choices[0].message.content);
    return res.body;
  } catch (err) {
    console.error('Error sending request:', err.message);
    throw err;
  }
}
