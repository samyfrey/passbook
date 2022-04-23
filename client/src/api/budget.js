import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexBudgets = () => {
  return axios.get(apiUrl + '/budget')
}

export const showBudget = (budgetId) => {
  return axios.get(`${apiUrl}/budget/${budgetId}`)
}

export const postBudget = (type, amount, user) => {
  return axios.post(`${apiUrl}/budget/`, {
    budget: {
      type: type,
      amount: amount
    }
  },
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }

  })
}

export const editBudget = (budgetId, updatedAmount) => {
  return axios.patch(
    `${apiUrl}/budget/${budgetId}`,
    {
      budget: { amount: updatedAmount }
    }
  )
}
