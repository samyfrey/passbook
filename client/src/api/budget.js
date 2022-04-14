import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexBudgets = () => {
  return axios.get(apiUrl + '/budget')
}

export const showClient = (borrowerId) => {
  return axios.get(`${apiUrl}/clients/${borrowerId}`)
}

export const createClient = (user, client) => {
  return axios.post(
    apiUrl + '/clients',
    { client: client },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const deleteClient = (user, clientId) => {
  return axios.delete(`${apiUrl}/clients/${clientId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
