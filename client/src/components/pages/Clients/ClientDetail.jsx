import React, { useState, useEffect } from 'react'
import '../../styles/Client.scss'

import { indexClients } from '../../../api/clients'

const Client = () => {
  const [clients, setClients] = useState([])
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await indexClients()
        setClients(res.data.clients)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchClients()
  }, [])

  return clients.map(client => (
    <>
      <p>Hello from the clients component</p>
      <li key={client._id}>
        <p>{client.name}</p>
      </li>
    </>
  ))
}

export default Client
