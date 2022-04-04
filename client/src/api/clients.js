import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexClients = () => {
  return axios.get(apiUrl + '/clients')
}

export const showClient = (borrowerId) => {
  return axios.get(`${apiUrl}/clients/${borrowerId}`)
}

export const createClient = (user, client) => {
  return axios.post(apiUrl + '/clients',
    { client: client },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
}
