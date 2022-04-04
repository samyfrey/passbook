import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexLoans = () => {
  return axios.get(apiUrl + '/loans')
}
