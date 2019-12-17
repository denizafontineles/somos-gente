import axios from 'axios'

const config = {
  baseURL: 'http://my-json-server.typicode.com/denizafontineles/projects',
  timeout: 1000
}

const protocolo = axios.create(config)

export function getProjects () {
  const url = '/Projects'
  return protocolo.get(url)
}