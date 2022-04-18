import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexBudgets = () => {
  return axios.get(apiUrl + '/budget')
}

export const showBudget = (budgetId) => {
  return axios.get(`${apiUrl}/budget/${budgetId}`)
}

export const editBudget = (budgetId, updatedAmount) => {
  return axios.patch(
    `${apiUrl}/budget/${budgetId}`,
    {
      budget: { amount: updatedAmount }
    }
  )
}
// export const createClient = (user, client) => {
//   return axios.post(
//     apiUrl + '/clients',
//     { client: client },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }

// export const deleteClient = (user, clientId) => {
//   return axios.delete(`${apiUrl}/clients/${clientId}`, {
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }
