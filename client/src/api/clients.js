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

// PATCH Request
// clients/:borrowerId

export const editClient = (borrowerId, user, name, industry, creditLimit) => {
  return axios.patch(
    `${apiUrl}/clients/${borrowerId}/edit`,

    {
      client: { name, industry, creditLimit }
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
