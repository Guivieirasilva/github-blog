import axios from 'axios'

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_BASE_URL}`,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
})
