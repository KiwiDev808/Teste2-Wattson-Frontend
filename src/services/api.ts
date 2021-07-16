import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3003'

const getAllComments = async () => {
  const response = axios.get('/comment')
  return response.then((response) => response.data)
}

const createComment = async (description: string) => {
  const response = axios.post('/comment', { description })
  return response.then((response) => response.data)
}

export { getAllComments, createComment }
