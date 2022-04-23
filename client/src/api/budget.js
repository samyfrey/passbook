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
