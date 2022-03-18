import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexClients = () => {
  return axios.get(apiUrl + '/clients')
}
