import apiUrl from '../apiConfig'
import axios from 'axios'

// GET is same as client GET given that loan is a subarray of clients

// POST
// loans/create
// authenticated

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

// PATCH
// Update a loan
// authenticated

export const updateLoan = (loanId, borrowerId, loan) => {
  return axios.patch(`${apiUrl}/loans/${loanId}`,
    {

      loan: {
        borrowerId: borrowerId,
        revenue: loan.revenue
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

export const showLoan = (loanId, borrowerId) => {
  // const params = {
  //   borrowerId: borrowerId
  // }
  // console.log('params is', params)
  return axios.get(
    `${apiUrl}/loans/`, {
      params: {
        loanId,
        borrowerId
      }
    }

  )
}
// export const showLoan = (loanId, borrowerId) => {
//   console.log('borrowerId is from api', borrowerId)
//   return axios.get(
//     `${apiUrl}/loans/${loanId}`,
//     {
//       loan: {
//         borrowerId
//       }
//     }

//   )
// }
