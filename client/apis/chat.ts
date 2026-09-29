import request from 'superagent'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getModels() {
  try {
    const response = await request.get(`${rootURL}/models`)
    return await response.body
  } catch (error) {
    console.error('Error fetching models:', error)
    throw error
  }
}

export async function postToModel(input: string, model?: string) {
  try {
    const res = await request.post(`${rootURL}/chat`).set('Content-Type', 'application/json').send({
    model: model || 'halogen-qwen3.8-flash-next',
    messages: [
      {
        role: 'user',
        content: input,
      },
    ],
  }); // Sends JSON post body

    console.log('Status:', res.status);
    console.log('Response Body:', res.body.choices[0].message.content);
    return res.body;
  } catch (err) {
    console.error('Error sending request:', err.message);
    throw err;
  }
}
