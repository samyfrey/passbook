import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
// import { indexLoans } from '../../../api/loans'
export const ClientsOverview = () => {
  const [clients, setClients] = useState(null)
  // const [loans, setLoans] = useState([])
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await indexClients()
        setClients(res.data.clients)
        console.log('index clients is', res)
        await console.log('index clients is now', clients)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClients()

  //   const fetchLoans = async () => {
  //     try {
  //       const res = await indexLoans()
  //       setClients(res.data.loans)
  //       console.log('loan res is:', res)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchLoans()
  }, [])

  if (!clients) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  // const globalAmount = clients.loans.reduce((total, loan) => {
  //   return total + loan.amount
  // }, 0)

  return (
    <div>
      <h1>Clients List</h1>
      <Link to='/clients/create'>
        <button>Add a client</button>
      </Link>
      {clients.map(client => (
        <ul key={client._id}>
          <Link to={`/clients/${client._id}`}>{client.name}</Link>
        </ul>
      ))}
      {/* {globalAmount} */}
    </div>
  )
}