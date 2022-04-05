import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
// import { indexLoans } from '../../../api/loans'

const ClientsOverview = () => {
  const [clients, setClients] = useState(null)
  // const [loans, setLoans] = useState([])
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await indexClients()
        setClients(res.data.clients)
        await console.log('index clients is', res)
        await console.log('clients state is now', clients)
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
    <div className='container'>
      <h1>Clients List</h1>
      <Link to='/clients/create'>
        <button>Add a client</button>
      </Link>w
      {/* {clients.map(client => (
        <ul key={client._id}>
          <Link to={`/clients/${client._id}`}>{client.name}</Link>
        </ul>
      ))} */}
      {/* {globalAmount} */}
      <p>Loan table {clients.map(client => (
        <ul key={client._id}>
          {/* <li>{client.name}</li> */}
          {client.loans.map(loan => (
            <ul key={loan._id}>
              <li>{loan.amount}</li>
            </ul>
          ))}
        </ul>
      ))}</p>
      <ListTable rows={clients}/>
    </div>
  )
}

export default ClientsOverview
