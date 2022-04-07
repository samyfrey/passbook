import React from 'react'

import { Link } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import ListTable from '../../Table/ListTable'
import './Client.scss'
// import { indexLoans } from '../../../api/loans'

const ClientsOverview = ({ clients }) => {
  // const [clients, setClients] = useState([])
  // // const [loans, setLoans] = useState([])
  // useEffect(() => {
  //   const fetchClients = async () => {
  //     try {
  //       const res = await indexClients()
  //       setClients(res.data.clients)
  //       // await console.log('index clients is', res)
  //     } catch (error) {
  //       console.log('error is', error)
  //     }
  //   }
  //   fetchClients()
  // }, [])

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

    function grandTotal (array) {
      let sum = 0
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const result = selectBorrower[j].amount
          sum += result
        }
      }
      return sum
    }

    const selectArray = (array) => {
      const sum = []
      for (let i = 0; i < array.length; i++) {
        const selectBorrower = array[i].loans
        for (let j = 0; j < selectBorrower.length; j++) {
          const myArray = selectBorrower[j].revenue
          sum.push(myArray)
        }
      }
      return sum
    }

    const findCumulativeSum = arr => {
      const creds = arr.reduce((acc, val) => {
        let { sum, res } = acc
        sum += val
        res.push(sum)
        return { sum, res }
      }, {
        sum: 0,
        res: []
      })
      return creds.res
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
