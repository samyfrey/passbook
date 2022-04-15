import apiUrl from '../apiConfig'
import axios from 'axios'

// GET is same as client GET given that loan is a subarray of clients

// POST
// loans/create
// authenticated and needs the borrower Id (from drop down ideally)

export const createLoan = (user, loan) => {
  return axios.post(
    apiUrl + '/loans/create',
    { loan: loan },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

// SHOW one loan based on ID
// authenticated
export const showLoan = (user, loanId, borrowerId) => {
  return axios.get(`${apiUrl}/loans/${loanId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      loan: {
        borrowerId: borrowerId
      }
    }
  })
}

// PATCH
// Update a loan
// authenticated

export const updateLoan = (user, loanId, borrowerId, loan) => {
  return axios.patch(`${apiUrl}/loans/${loanId}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    },

    data: {
      loan: {
        borrowerId: borrowerId,
        revenue: loan.revenue
      }
    }
  })
}

// export const deleteLoan = (user, loanId) => {
//   return axios.delete(`${apiUrl}/loans/${loanId}`, {
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

export const deleteLoan = (user, loanId, borrowerId) => {
  return axios.delete(
    `${apiUrl}/loans/${loanId}`,

    {
      headers: {
        Authorization: `Bearer ${user.token}`
      },

      data: {
        loan: {

          borrowerId: borrowerId
        }
      }
    }

  )
}
