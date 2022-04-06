import React, { useState, useEffect } from 'react'
// import { ClientDetail } from './ClientDetail'
import { indexClients } from '../../../api/clients'
import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
// import { indexLoans } from '../../../api/loans'

const ClientsOverview = () => {
  const [clients, setClients] = useState([])
  // const [loans, setLoans] = useState([])
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await indexClients()
        setClients(res.data.clients)
        // await console.log('index clients is', res)
      } catch (error) {
        console.log('error is', error)
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
  console.log('clients state is now', clients)

  if (!clients) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else {
    // const globalAmount = clients.map(client => {
    //   return client.loans.reduce((total, loan) => {
    //     return total + loan.amount
    //   }, 0)
    // })

    let sum = 0
    function grandTotal (clients) {
      for (let i = 0; i < clients.length; i++) {
        const selectBorrower = clients[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const result = selectBorrower[j].amount
          sum += result
        }
      }
      return sum
    }

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
        <p>Total loans: {grandTotal(clients)}</p>

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
}

export default ClientsOverview
