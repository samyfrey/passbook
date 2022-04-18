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
// authenticated

export const editBudget = (user, borrowerId, updatedClient) => {
  return axios.patch(`${apiUrl}/clients/${borrowerId}/edit`, {
    budget: { amount: updatedAmount }
  })
}
export const deleteClient = (user, clientId) => {
  return axios.delete(`${apiUrl}/clients/${clientId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
