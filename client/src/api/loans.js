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
